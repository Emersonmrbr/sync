using Microsoft.AspNetCore.Components;
using System.ComponentModel.DataAnnotations;
using SiteNucleoMap.Libraries.Mail;

namespace Sync.Components.Pages
  {
  public partial class Contato
    {
    private static readonly InputModel inputModel = new InputModel
      {
      Name = string.Empty,
      LastName = string.Empty,
      Email = string.Empty,
      Phone = string.Empty,
      Message = string.Empty,
      };

    [SupplyParameterFromForm]
    private InputModel Input { get; set; } = inputModel;

    [SupplyParameterFromQuery]
    private string? ReturnUrl { get; set; }
    private sealed class InputModel()
      {
      [Required(ErrorMessage = "Name is required.")]
      [StringLength(50, ErrorMessage = "Name cannot be longer than 50 characters.")]
      public required string Name { get; set; } = string.Empty;
      [Required(ErrorMessage = "Last name is required.")]
      [StringLength(50, ErrorMessage = "Last name cannot be longer than 50 characters.")]
      public required string LastName { get; set; } = string.Empty;
      [Required(ErrorMessage = "Email is required.")]
      [EmailAddress(ErrorMessage = "Email is not valid.")]
      [Display(Name = "Email")]
      public required string Email { get; set; } = string.Empty;
      [Required(ErrorMessage = "Phone is required.")]
      [Phone(ErrorMessage = "Phone is not valid.")]
      public required string Phone { get; set; } = string.Empty;
      [Required(ErrorMessage = "Message is required.")]
      [StringLength(500, ErrorMessage = "Message cannot be longer than 500 characters.")]
      public required string Message { get; set; } = string.Empty;
      }
    public void Feedback()
      {

      }
    public async void Sendemail()
      {
      var emailSender = new EmailSender();
      await emailSender.SendEmailAsync(Input.Message);
      }

    }

  }


