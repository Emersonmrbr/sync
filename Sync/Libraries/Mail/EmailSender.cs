using System.Net.Mail;

namespace SiteNucleoMap.Libraries.Mail
{
  public class EmailSender
  {
    public string fromEmail = string.Empty;
    public string toEmail = string.Empty;
        public async Task SendEmailAsync(string message)
    {

      await Execute(message);
    }

    public async Task Execute(string message)
    {
      var mailMessage = new MailMessage
      {
        From = new MailAddress(fromEmail)
      };
      mailMessage.To.Add(toEmail);
      mailMessage.Subject = "Email enviado pelo site";
      mailMessage.Body = message;
      mailMessage.IsBodyHtml = true;
      //await smtpClient.SendMailAsync(mailMessage);
    }
  }
}
