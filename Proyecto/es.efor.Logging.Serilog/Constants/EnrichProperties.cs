using es.efor.Logging.Serilog.Middleware;

namespace es.efor.Logging.Serilog.Constants
{
    public static class EnrichProperties
    {
        public const string SERILOG_ENRICH_PROP_HOSTNAME = "Hostname";
        public const string SERILOG_ENRICH_PROP_APPNAME = "AppName";
        public const string SERILOG_ENRICH_PROP_APPINSTANCEID = "AppInstance";
        public const string SERILOG_ENRICH_PROP_APPVERSION = "AppVersion";
        public const string SERILOG_ENRICH_PROP_APPINSTANCEDATETIME = "AppInstanceDatetime";


        public const string SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_REQUEST_QUERY = "RequestQuery";
        public const string SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_REQUEST_BODY = "RequestBody";

        public const string SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_RESPONSE_BODY = "ResponseBody";

        /// <summary>
        /// This property, which should be of boolean value, represents if an exception
        /// was catched when the <see cref="BodyLoggerMiddleware"/> tried to complete
        /// calls to the API or other middleware.
        /// </summary>
        public const string SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_RESPONSE_EXCEPTION_FLOW = "ExceptionOnFlow";
        /// <summary>
        /// This property, which sould be of string value (the exception log), represents
        /// that an exception was catched when the <see cref="BodyLoggerMiddleware"/> tried
        /// to read the response body as string.
        /// </summary>
        public const string SERILOG_ENRICH_PROP_HTTPMIDDLEWARE_RESPONSE_EXCEPTION_READER = "ExceptionOnReader";
    }
}
