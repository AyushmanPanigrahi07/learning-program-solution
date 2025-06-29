using System;

public class Logger
{
    private static Logger instance = null;
    private static readonly object lockObj = new object();

    // Private constructor prevents instantiation from other classes
    private Logger()
    {
        Console.WriteLine("Logger instance created.");
    }

    // Public static method to get the instance
    public static Logger GetInstance()
    {
        // Double-checked locking to ensure thread-safety
        if (instance == null)
        {
            lock (lockObj)
            {
                if (instance == null)
                {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    public void Log(string message)
    {
        Console.WriteLine("Log Message: " + message);
    }
}