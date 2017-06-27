using System;
using System.Reflection;

namespace Ayellet.Common
{
    public class AyelletLogger
    {
        private static readonly ILogger defaultLogger;
        private ILogger logger;

        static AyelletLogger()
        {
            defaultLogger =
              LoggerManager.GetLogger(Assembly.GetCallingAssembly(), "defaultLogger");
            log4net.Config.XmlConfigurator.Configure(defaultLogger.Repository);
        }

        public AyelletLogger(string loggerName = null)
        {
            if (!string.IsNullOrWhiteSpace(loggerName))
            {
                logger = LoggerManager.GetLogger(Assembly.GetCallingAssembly(), loggerName);
                log4net.Config.XmlConfigurator.Configure(logger.Repository);

            }
        }
        public void Debug(string message)
        {
            ILogger currentLogger = logger == null ? defaultLogger : logger;
            if (currentLogger.IsEnabledFor(Level.Debug))
            {
                currentLogger.Log(typeof( Logger), Level.Debug, message, null);
            }
        }
        public void DebugFormat(string message, params object[] args)
        {
            Debug(string.Format(message, args));
        }
        public void Info(string message)
        {
            ILogger currentLogger = logger == null ? defaultLogger : logger;
            if (currentLogger.IsEnabledFor(Level.Info))
            {
                currentLogger.Log(typeof(Logger), Level.Info, message, null);
            }
        }
        public void InfoFormat(string message, params object[] args)
        {
            Info(string.Format(message, args));
        }
        public void Error(string message)
        {
            ILogger currentLogger = logger == null ? defaultLogger : logger;
            if (currentLogger.IsEnabledFor(Level.Error))
            {
                currentLogger.Log(typeof( Logger), Level.Error, message, null);
            }
        }
        public void ErrorFormat(string message, params object[] args)
        {
            Error(string.Format(message, args));
        }
        public void Warn(string message)
        {
            ILogger currentLogger = logger == null ? defaultLogger : logger;
            if (currentLogger.IsEnabledFor(Level.Warn))
            {
                currentLogger.Log(typeof(Logger), Level.Warn, message, null);
            }
        }
        public void WarnFormat(string message, params object[] args)
        {
            Warn(string.Format(message, args));
        }
        public void Fatal(string message)
        {
            ILogger currentLogger = logger == null ? defaultLogger : logger;
            if (currentLogger.IsEnabledFor(Level.Fatal))
            {
                currentLogger.Log(typeof(Logger), Level.Fatal, message, null);
            }
        }
        public void FatalFormat(string message, params object[] args)
        {
            Fatal(string.Format(message, args));
        }
    }
}
