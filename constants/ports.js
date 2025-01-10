const PORTS = [
    {
        port: 20,
        protocol: "FTP (data)",
        title: "File Transfer Protocol (Data Transfer)",
    },
    {
        port: 21,
        protocol: "FTP (control)",
        title: "File Transfer Protocol (Control)",
    },
    { port: 22, protocol: "SSH", description: "Secure Shell" },
    {
        port: 23,
        protocol: "Telnet",
        title: "Unencrypted text communications",
    },
    {
        port: 25,
        protocol: "SMTP",
        title: "Simple Mail Transfer Protocol",
    },
    { port: 53, protocol: "DNS", description: "Domain Name System" },
    {
        port: 69,
        protocol: "TFTP",
        title: "Trivial File Transfer Protocol",
    },
    { port: 80, protocol: "HTTP", description: "Hypertext Transfer Protocol" },
    {
        port: 110,
        protocol: "POP3",
        title: "Post Office Protocol version 3",
    },
    {
        port: 143,
        protocol: "IMAP",
        title: "Internet Message Access Protocol",
    },
    {
        port: 161,
        protocol: "SNMP",
        title: "Simple Network Management Protocol",
    },
    { port: 162, protocol: "SNMPTRAP", description: "SNMP Trap" },
    {
        port: 389,
        protocol: "LDAP",
        title: "Lightweight Directory Access Protocol",
    },
    {
        port: 443,
        protocol: "HTTPS",
        title: "Hypertext Transfer Protocol Secure",
    },
    { port: 445, protocol: "SMB", description: "Server Message Block" },
    {
        port: 636,
        protocol: "LDAPS",
        title: "Lightweight Directory Access Protocol over TLS/SSL",
    },
    {
        port: 989,
        protocol: "FTPS (Data)",
        title: "File Transfer Protocol Secure",
        description: "FTPS is a secure version of the File Transfer Protocol (FTP) used to transfer files between computers over a network.\n\nFTPS uses two ports, one for data and one for control.",
    },
    {
        port: 990,
        protocol: "FTPS (Control)",
        title: "File Transfer Protocol Secure",
        description: "FTPS is a secure version of the File Transfer Protocol (FTP) used to transfer files between computers over a network.\n\nFTPS uses two ports, one for data and one for control.",
    },
    {
        port: 993,
        protocol: "IMAPS",
        title: "Internet Message Access Protocol over SSL",
    },
    {
        port: 995,
        protocol: "POP3S",
        title: "Post Office Protocol 3 Secure",
    },
    { port: 1433, protocol: "MSSQL", title: "Microsoft SQL Server" },
    { port: 1521, protocol: "Oracle", title: "Oracle database" },
    { port: 3306, protocol: "MySQL", title: "MySQL database" },
    { port: 3389, protocol: "RDP", title: "Remote Desktop Protocol" },
    { port: 8080, protocol: "HTTP Proxy", title: "HTTP Proxy" },
];

export default PORTS;
