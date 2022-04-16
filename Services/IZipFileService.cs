using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenwichCMS.Services
{
    public interface IZipFileService
    {
        public string CreateZipFile(List<string> startPaths, string endPath);
    }
}
