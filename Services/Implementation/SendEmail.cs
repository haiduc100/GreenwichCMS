using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace GreenwichCMS.Services.Implementation
{
    public class SendEmail : ISendEmail
    {

        public SmtpClient Client { get; set; } = new SmtpClient("smtp.gmail.com");
        public MailMessage Message { get; set; }
        public SendEmail()
        {
            Client.Credentials = new NetworkCredential("vanduc28062000", "nguyenvanduc");
            Client.EnableSsl = true;
            Client.Port = 25;
            Message = new MailMessage
            {
                From = new MailAddress("vanduc28062000@gmail.com", "GreenwichCMS"),
                IsBodyHtml = true,
                Priority = MailPriority.Normal,
                BodyEncoding = Encoding.UTF8
            };

        }

        public bool NotifyCreateNewIdea(List<string> reciverEmail, string createBy)
        {
            Message.To.Clear();
            foreach (string email in reciverEmail)
            {
                Message.To.Add(new MailAddress(email));
            }
            Message.Subject = "New idea";
            Message.Body = $"{createBy} posted new idea";
            try
            {
                Client.Send(Message);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool NotifyReactIdea(string reciverEmail, string createBy)
        {
            Message.To.Clear();
            Message.To.Add(new MailAddress(reciverEmail));
            Message.Subject = "New reaction";
            Message.Body = $"{createBy} react your idea";
            try
            {
                Client.Send(Message);
                return true;
            }
            catch
            {
                return false;
            }

        }

        public bool NotifyCommentIdea(string reciverEmail, string createBy)
        {
            Message.To.Clear();
            Message.To.Add(new MailAddress(reciverEmail));
            Message.Subject = "New Comment";
            Message.Body = $"{createBy} comment your idea";
            try
            {
                Client.Send(Message);
                return true;
            }
            catch
            {
                return false;
            }

        }

    }
}
