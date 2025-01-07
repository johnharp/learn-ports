const PORTS = [
    {
        port: 20,
        protocol: "FTP (data)",
        description: "File Transfer Protocol (Data Transfer)",
    },
    {
        port: 21,
        protocol: "FTP (control)",
        description: "File Transfer Protocol (Control)",
    },
    { port: 22, protocol: "SSH", description: "Secure Shell" },
    {
        port: 23,
        protocol: "Telnet",
        description: "Unencrypted text communications",
    },
    {
        port: 25,
        protocol: "SMTP",
        description: "Simple Mail Transfer Protocol",
    },
    { port: 53, protocol: "DNS", description: "Domain Name System" },
    {
        port: 69,
        protocol: "TFTP",
        description: "Trivial File Transfer Protocol",
    },
    { port: 80, protocol: "HTTP", description: "Hypertext Transfer Protocol" },
    {
        port: 110,
        protocol: "POP3",
        description: "Post Office Protocol version 3",
    },
    {
        port: 143,
        protocol: "IMAP",
        description: "Internet Message Access Protocol",
    },
    {
        port: 161,
        protocol: "SNMP",
        description: "Simple Network Management Protocol",
    },
    { port: 162, protocol: "SNMPTRAP", description: "SNMP Trap" },
    {
        port: 389,
        protocol: "LDAP",
        description: "Lightweight Directory Access Protocol",
    },
    {
        port: 443,
        protocol: "HTTPS",
        description: "Hypertext Transfer Protocol Secure",
    },
    { port: 445, protocol: "SMB", description: "Server Message Block" },
    {
        port: 636,
        protocol: "LDAPS",
        description: "Lightweight Directory Access Protocol over TLS/SSL",
    },
    {
        port: 989,
        protocol: "FTPS",
        description: "File Transfer Protocol Secure (Data)",
    },
    {
        port: 990,
        protocol: "FTPS",
        description: "File Transfer Protocol Secure (Control)",
    },
    {
        port: 993,
        protocol: "IMAPS",
        description: "Internet Message Access Protocol over SSL",
    },
    {
        port: 995,
        protocol: "POP3S",
        description: "Post Office Protocol 3 Secure",
    },
    { port: 1433, protocol: "MSSQL", description: "Microsoft SQL Server" },
    { port: 1521, protocol: "Oracle", description: "Oracle database" },
    { port: 3306, protocol: "MySQL", description: "MySQL database" },
    { port: 3389, protocol: "RDP", description: "Remote Desktop Protocol" },
    { port: 8080, protocol: "HTTP Proxy", description: "HTTP Proxy" },
];

export default PORTS;
