using Microsoft.JSInterop;
using System.Runtime.CompilerServices;

namespace Sync.Client.Components.Pages
{
    public partial class Localizacao
    {
        private IJSObjectReference? module;

        protected async override Task OnAfterRenderAsync(bool firstRender)
        {
            module = await JS.InvokeAsync<IJSObjectReference>("import", "./Pages/Localizacao.razor.js");
        }

        async ValueTask IAsyncDisposable.DisposeAsync()
        {
            if (module is not null)
            {
                try
                {
                    await module.DisposeAsync();
                }
                catch (JSDisconnectedException)
                {
                }
            }
        }
    }
}
