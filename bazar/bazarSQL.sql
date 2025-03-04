USE [master]
GO
/****** Object:  Database [bazar_store]    Script Date: 26/12/2024 06:48:03 p. m. ******/
CREATE DATABASE [bazar_store]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bazar_store', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\bazar_store.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bazar_store_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\bazar_store_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [bazar_store] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bazar_store].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bazar_store] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bazar_store] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bazar_store] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bazar_store] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bazar_store] SET ARITHABORT OFF 
GO
ALTER DATABASE [bazar_store] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bazar_store] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bazar_store] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bazar_store] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bazar_store] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bazar_store] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bazar_store] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bazar_store] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bazar_store] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bazar_store] SET  ENABLE_BROKER 
GO
ALTER DATABASE [bazar_store] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bazar_store] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bazar_store] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bazar_store] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bazar_store] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bazar_store] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bazar_store] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bazar_store] SET RECOVERY FULL 
GO
ALTER DATABASE [bazar_store] SET  MULTI_USER 
GO
ALTER DATABASE [bazar_store] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bazar_store] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bazar_store] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bazar_store] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bazar_store] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bazar_store] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'bazar_store', N'ON'
GO
ALTER DATABASE [bazar_store] SET QUERY_STORE = ON
GO
ALTER DATABASE [bazar_store] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [bazar_store]
GO
/****** Object:  Table [dbo].[dimensions]    Script Date: 26/12/2024 06:48:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dimensions](
	[product_id] [int] NOT NULL,
	[width] [decimal](5, 2) NULL,
	[height] [decimal](5, 2) NULL,
	[depth] [decimal](5, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[images]    Script Date: 26/12/2024 06:48:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[images](
	[product_id] [int] NOT NULL,
	[url] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[product_id] ASC,
	[url] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[meta]    Script Date: 26/12/2024 06:48:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[meta](
	[product_id] [int] NOT NULL,
	[createdAt] [datetime] NULL,
	[updatedAt] [datetime] NULL,
	[barcode] [varchar](50) NULL,
	[qrCode] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 26/12/2024 06:48:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[id] [int] NOT NULL,
	[title] [varchar](255) NOT NULL,
	[description] [text] NULL,
	[category] [varchar](50) NULL,
	[price] [decimal](10, 2) NULL,
	[discountPercentage] [decimal](5, 2) NULL,
	[rating] [decimal](3, 2) NULL,
	[stock] [int] NULL,
	[brand] [varchar](50) NULL,
	[sku] [varchar](20) NULL,
	[weight] [decimal](5, 2) NULL,
	[warrantyInformation] [varchar](255) NULL,
	[shippingInformation] [varchar](255) NULL,
	[availabilityStatus] [varchar](50) NULL,
	[returnPolicy] [varchar](255) NULL,
	[minimumOrderQuantity] [int] NULL,
	[thumbnail] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[reviews]    Script Date: 26/12/2024 06:48:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[reviews](
	[id] [int] NOT NULL,
	[product_id] [int] NULL,
	[rating] [int] NULL,
	[comment] [text] NULL,
	[date] [datetime] NULL,
	[reviewerName] [varchar](100) NULL,
	[reviewerEmail] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sales]    Script Date: 26/12/2024 06:48:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sales](
	[id] [int] NOT NULL,
	[product_id] [int] NULL,
	[quantity] [int] NULL,
	[sale_date] [datetime] NULL,
	[total_price] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tags]    Script Date: 26/12/2024 06:48:04 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tags](
	[product_id] [int] NOT NULL,
	[tag] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[product_id] ASC,
	[tag] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[sales] ADD  DEFAULT (getdate()) FOR [sale_date]
GO
ALTER TABLE [dbo].[dimensions]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[images]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[meta]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[reviews]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[sales]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[tags]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
ON DELETE CASCADE
GO
USE [master]
GO
ALTER DATABASE [bazar_store] SET  READ_WRITE 
GO
