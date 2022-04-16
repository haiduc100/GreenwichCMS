using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace GreenwichCMS
{
    public class Program
    {

        public static void Main(string[] args)
        {
            var root = Directory.GetCurrentDirectory();
            var filepath = Path.Combine(root, "FileIdea");
            if (!Directory.Exists(filepath))
            {
                Directory.CreateDirectory(filepath);
            }

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
