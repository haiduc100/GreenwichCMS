using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenwichCMS.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore.SqlServer;
using GreenwichCMS.DAO;
using GreenwichCMS.DAO.Implementation;
using AutoMapper;
using GreenwichCMS.Commons;
using GreenwichCMS.Services;
using GreenwichCMS.Services.Implementation;
using GreenwichCMS.Models;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace GreenwichCMS
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllersWithViews();
            services.AddSpaStaticFiles(c =>
            {
                c.RootPath = "client/build";
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "GreenwichCMS", Version = "v1" });
            });
            string connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<GreenwichContext>(options => options.UseSqlServer(connectionString));

            // In production, the React files will be served from this directory
            //services.AddSpaStaticFiles(configuration =>
            //{
            //    configuration.RootPath = "ClientApp/build";
            //});
            services.AddScoped<ICommentRepo, CommentRepo>();
            services.AddScoped<ICommentService, CommentService>();
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IUserServices, UserServices>();
            services.AddScoped<IRoleRepo, RoleRepo>();
            services.AddScoped<IRoleServices, RoleServices>();
            services.AddScoped<IideaServices, IdeaService>();
            services.AddScoped<IIdeaRepo, IdeaRepo>();
            services.AddScoped<ICategoryRepo, CategoryRepo>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IReactionRepo, ReactionRepo>();
            services.AddScoped<IReactionService, ReactionService>();

            services.AddSingleton<ISendEmail, SendEmail>();
            services.AddSingleton<IZipFileService, ZipFileService>();

            // Adding Authentication  
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options => // Adding Jwt Bearer  
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateIssuerSigningKey = true,
                    ClockSkew = TimeSpan.Zero,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                };
            });

            services.AddTransient<ITokenServices, TokenServices>();

            var mapperConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new Mapping());
                });

            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "GreenwichCMS v1"));
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"FileIdea")),
                RequestPath = new PathString("/FileIdea")
            });

            app.UseRouting();
            app.UseCors(builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "client";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
