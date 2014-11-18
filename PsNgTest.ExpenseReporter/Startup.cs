using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PsNgTest.ExpenseReporter.Startup))]
namespace PsNgTest.ExpenseReporter
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
