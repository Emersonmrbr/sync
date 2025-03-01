using System.Threading;
namespace Sync.Components.Pages
  {
  public partial class ImageSlider
    {
    public int CurrentIndex = 1;
    public string Transition = "transition : all 500ms ease-in";
    public bool ButtonPressed = false;
    private readonly List<ImageItem> imageItems = [
        new ImageItem {
        ImageUrl = "img/home/image1.jpg",
        Title = "Codificando o Futuro",
        Description = "A programação não é apenas escrever códigos; é a arte de transformar ideias em realidade e criar um mundo de possibilidades ilimitadas."
        },
        new ImageItem {
        ImageUrl = "img/home/image2.jpg",
        Title = "Robótica: Moldando Amanhã",
        Description="A robótica não é apenas montar máquinas; é a habilidade de dar vida às ideias e construir um futuro onde a imaginação não tem limites."
        },
        new ImageItem {
        ImageUrl = "img/home/image3.jpg",
        Title = "Automação Residencial: Vivendo o Futuro",
        Description = "Automação residencial não é apenas conveniência; é a chave para ransformar casas em lares inteligentes, onde conforto e inovação se encontram a cada toque."
        },
        new ImageItem {
        ImageUrl = "img/home/image4.jpg",
        Title = "IoT: Conectando o Mundo",
        Description = "O IoT não é apenas tecnologia; é a revolução de conectar tudo ao nosso redor, criando um ecossistema inteligente onde cada interação faz a diferença."
        },
        new ImageItem {
        ImageUrl = "img/home/image5.jpg",
        Title = "Transformando Visões em Realidade",
        Description = "A consultoria não é apenas aconselhar; é o poder de transformar visões em realidade, guiando empresas rumo ao sucesso com estratégias inteligentes e soluções personalizadas."
        },
        new ImageItem {
        ImageUrl = "img/home/image6.jpg",
        Title = "Indústria 4.0: A Revolução do Agora",
        Description = "A Indústria 4.0 não é apenas uma evolução tecnológica; é a transformação radical que integra inteligência, eficiência e inovação, redefinindo o futuro da manufatura e dos negócios."
        },
        ];

    protected override void OnAfterRender(bool firstRender)
      {
      base.OnAfterRender(firstRender);
      if (firstRender)
        {

        }
      }

    public class ImageItem()
      {
      public string ImageUrl { get; set; } = string.Empty;
      public string Title { get; set; } = string.Empty;
      public string Description { get; set; } = string.Empty;
      }

    public void Next()
      {
      Transition = "transition : all 500ms ease-in";
      CurrentIndex++;
      if (CurrentIndex >= imageItems.Count + 2)
        {
        Transition = string.Empty;
        CurrentIndex = 1;
        }
      InvokeAsync(StateHasChanged);

      }

    public void Previous()
      {
      Transition = "transition : all 500ms ease-in";
      CurrentIndex--;
      if (CurrentIndex < 0)
        {
        Transition = string.Empty;
        CurrentIndex = imageItems.Count;
        }
      InvokeAsync(StateHasChanged);
      }
    }
  }