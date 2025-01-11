const PORTS = [
    {
        port: 20,
        protocol: "FTP (data)",
        title: "File Transfer Protocol (Data Transfer)",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 21,
        protocol: "FTP (control)",
        title: "File Transfer Protocol (Control)",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 22,
        protocol: "SSH",
        title: "Secure Shell",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 23,
        protocol: "Telnet",
        title: "Unencrypted text communications",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 25,
        protocol: "SMTP",
        title: "Simple Mail Transfer Protocol",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 53,
        protocol: "DNS",
        title: "Domain Name System",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 69,
        protocol: "TFTP",
        title: "Trivial File Transfer Protocol",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 80,
        protocol: "HTTP",
        title: "Hypertext Transfer Protocol",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 110,
        protocol: "POP3",
        title: "Post Office Protocol version 3",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 143,
        protocol: "IMAP",
        title: "Internet Message Access Protocol",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 161,
        protocol: "SNMP",
        title: "Simple Network Management Protocol",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 162,
        protocol: "SNMPTRAP",
        title: "SNMP Trap",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 389,
        protocol: "LDAP",
        title: "Lightweight Directory Access Protocol",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 443,
        protocol: "HTTPS",
        title: "Hypertext Transfer Protocol Secure",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 445,
        protocol: "SMB",
        title: "Server Message Block",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 636,
        protocol: "LDAPS",
        title: "Lightweight Directory Access Protocol over TLS/SSL",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 989,
        protocol: "FTPS (Data)",
        title: "File Transfer Protocol Secure",
        description:
            "FTPS is a secure version of the File Transfer Protocol (FTP) used to transfer files between computers over a network.\n\nFTPS uses two ports, one for data and one for control.",
    },
    {
        port: 990,
        protocol: "FTPS (Control)",
        title: "File Transfer Protocol Secure",
        description:
            "FTPS is a secure version of the File Transfer Protocol (FTP) used to transfer files between computers over a network.\n\nFTPS uses two ports, one for data and one for control.",
    },
    {
        port: 993,
        protocol: "IMAPS",
        title: "Internet Message Access Protocol over SSL",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 995,
        protocol: "POP3S",
        title: "Post Office Protocol 3 Secure",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 1433,
        protocol: "MSSQL",
        title: "Microsoft SQL Server",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 1521,
        protocol: "Oracle",
        title: "Oracle database",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 3306,
        protocol: "MySQL",
        title: "MySQL database",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 3389,
        protocol: "RDP",
        title: "Remote Desktop Protocol",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
    {
        port: 8080,
        protocol: "HTTP Proxy",
        title: "HTTP Proxy",
        description:
            "TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD TBD ",
    },
];

export default PORTS;
