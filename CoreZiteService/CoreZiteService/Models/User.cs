namespace CoreZiteService.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string AvatarUrl { get; set; } = string.Empty;
        public int XP { get; set; } = 0;
        public int Level { get; set; } = 1;
        public int Score { get; set; } = 0;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
