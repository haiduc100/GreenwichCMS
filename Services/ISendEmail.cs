using System.Collections.Generic;

namespace GreenwichCMS.Services
{
    public interface ISendEmail
    {
        public bool NotifyCreateNewIdea(List<string> reciverEmail, string createBy);
        public bool NotifyReactIdea(string reciverEmail, string createBy);
        public bool NotifyCommentIdea(string reciverEmail, string createBy);
    }
}
