namespace Sync.Components.Layout
{
    public partial class NavMenu
    {
        private enum MenuItem { None, Products, Services, Company }

        private MenuItem activeMenu = MenuItem.None;

        private string? NavMenuCssClass => activeMenu != MenuItem.None ? "is-open" : "is-hidden";
        private string? ProductMenuCssClass => activeMenu == MenuItem.Products ? "is-open" : "is-hidden";
        private string? ServiceMenuCssClass => activeMenu == MenuItem.Services ? "is-open" : "is-hidden";
        private string? CompanyMenuCssClass => activeMenu == MenuItem.Company ? "is-open" : "is-hidden";

        private void ToggleNavMenu(MenuItem menuItem)
        {
            activeMenu = activeMenu == menuItem ? MenuItem.None : menuItem;
        }
    }
}
