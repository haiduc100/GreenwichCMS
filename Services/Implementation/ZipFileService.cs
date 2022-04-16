using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;

namespace GreenwichCMS.Services.Implementation
{
    public class ZipFileService : IZipFileService
    {
        public string CreateZipFile(List<string> startPaths, string endPath)
        {
            try
            {
                var zipFile = endPath;

                using (var archive = ZipFile.Open(zipFile, ZipArchiveMode.Create))
                {
                    foreach (var fPath in startPaths)
                    {
                        archive.CreateEntryFromFile(fPath, Path.GetFileName(fPath));
                    }
                }
                return endPath;
            }
            catch (Exception e)
            {
                return e.Message;
            }

        }
    }
}
