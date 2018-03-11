// -----------------------------------------------------------------------------
// You're going to edit this every month to add a new event.  The top event will
// show up at the top of the page.  All other events will appear in the
// 'Previous Events' section.
// When editing:
// 1. The date must be unique.
// 2. The link should be a_nicely_sanitised_string using only lowercase and
//    underscores.
// 3. The following are optional:
//   3a. event.attachment
//   3b. event.speakers.quote
// 4. The following fields use Markdown for formatting.  Google it.
// 5. Pay attention to the quote. 'x' and `x` are different and it's important
//    you use `x` for the markdown sections otherwise you won't be able to use
//    multi-line entries.
// 6. An event can have multiple speakers.
// -----------------------------------------------------------------------------
export default [
  {
    date: '2017-04-03',
    time: '6:00pm',
    title: 'Microservices in .NET Core',
    link: 'microservices_dotnet_Core',
    location: 'unidays_nottingham',
    // attachment: './attachments.zip',
    summary: ` In this workshop, Ian Cooper will guide you through creating microservices in .NET Core, from the first lines of code to deployment to Docker containers running Linux. 
    `,
    description: `This workshop is hands-on, and the intent will be to walk you through a typical .NET core Microservices stack. From exposing an HTTP API through inter-service messaging over MoM to running in Docker, you will discover what you need to know to build a Cloud Native application in .NET. We'll assist with repository code for items such as UI for your API, so that you can have a full-running application by the end of the session, that you can take home and use as a reference.
    `,
    what_you_will_need: `You will need to be able to edit C# code, and need an editor such as Code, Rider, or Visual Studio. The examples use Docker so you should be able to run Docker on your laptop (Docker for Windows, Docker for Mac, or Docker Toolbox). It will not be possible to fix Docker issues during the workshop, so you should make sure that you at least have the "Hello World" Docker container running:[Get Started, Part 1: Orientation and setup](https://docs.docker.com/get-started/#test-docker-installation) 
    `,
    links: {
      title: 'Microservices in .NET Core',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/248641787/'
    },
    speakers: [
      {
        name: 'Ian Cooper',
        avatar: '/images/speakers/ian-cooper.jpg',
        // quote: 'To be or not to be',
        bio: `Polyglot Coding Architect in London, founder of #ldnug, speaker, tabletop gamer, geek. Tattooed, pierced, and bearded. The 'guv' on @BrighterCommand
        `
        ,
        links: {
          facebook: 'ian.hammond.cooper',
          twitter: 'ICooper',
          linkedin: 'in/ian-cooper-2b059b/'
        }
      }
    ]
  },
  {
    date: '2017-03-06',
    time: '6:00pm',
    title: 'The Dev Star with Martin Beeby',
    link: 'the-dev-star',
    location: 'unidays_nottingham',
    // attachment: './attachments.zip',
    summary: `A mission based workshop where we use Microsevices to defeat an Alien warship. 
    `,
    description: `In this workshop you will work together in squads to complete the mission – becoming the Dev Star.
Choose your platform space fighter of choice (Node.js, Java or PHP) and develop and deploy cloud native microservices that will help defeat the Alien War Ship.
* You will learn how to build, manage and deploy cloud native microservices.
* You will learn how to manage the source control, continuous integration and continuous deployment of your microservices in a DevOps manner.
* You will explore and perform actions related to scaling and operating your microservices.
* You will use your creativity and team play to develop features to your microservices that will help your team win!
    
    RECOMMENDATIONS DEPENDING ON LANGUAGE:
    Java: Maven and JDK installed
    Node.js: NPM (Node Package Manager) installed
    PHP: Apache web server and PHP installed
    
    We will be deploying code into Oracle cloud but no signup will be required. Martin will bring along provisioned accounts for the workshop.
    `,
    what_you_will_need: `Laptop. Any IDE or code editor with Git support.
    Familiarity with any of the following coding languages: Java, PHP or Node.js.
    `,
    links: {
      title: 'The Dev Star with Martin Beeby',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/245555920/'
    },
    speakers: [
      {
        name: 'Martin Beeby ',
        avatar: '/images/speakers/Martin_Beeby.jpg',
        // quote: 'To be or not to be',
        bio: `Martin Beeby is a Developer Evangelist at Oracle. Martin has been developing since he was 16 and over the past 19 years has worked on projects with many Major brands. Prior to joining Oracle Martin worked at Microsoft as a developer and evangelist for 8 years. Martin has written articles for, and been featured in, NET Magazine, ZDNet, NOUPE, SitePoint, TutsPlus and Channel 9. 
        `
        ,
        links: {
          facebook: 'thebeebsuk',
          twitter: 'thebeebs',
          linkedin: 'in/thebeebs/'
        }
      }
    ]
  },
  {
    date: '2017-02-06',
    time: '6:00pm',
    title: 'Azure IoT Hubs, Raspberry Pi and Node.js',
    link: 'azur-iot-raspberry-pi',
    location: 'unidays_nottingham',
    // attachment: './attachments.zip',
    summary: `Have you got a Raspberry Pi lying around feeling all sad and unloved in its box on its own? Are you interested in learning some really basic electronics?  Come along to this workshop and learn a little bit about one potential use for your lonely Raspberry Pi, with Azure IoT Hubs and Node.js.
    `,
    description: ` We’ll then move on to assembling a really basic circuit containing a switch, some LED’s and a Simulated Temperature / Humidity Sensor which we’ll be controlling from the Raspberry Pi using NodeJS… Finally we’ll be stepping up a level and connecting the whole thing to an Azure Event Hub and getting Messaging working between the two.
        All hardware except a real Temperature Sensor will be available to use on the evening and already setup for you when you arrive. However, we do only have 7 kits available, so you're likely to need to share upto 1 kit between 3 people!
    `,
    what_you_will_need: `* An Azure account with a small amount of credit – If you don’t have one, sign up to Visual Studio Dev Essentials here, which will give you £20 of credit per month to play with; [http://bit.ly/nottsdevvsessentials](http://bit.ly/nottsdevvsessentials)
* Visual Studio Code installed - [http://bit.ly/nottsdevvscode](http://bit.ly/nottsdevvscode)
* An SSH Client such as PuTTY - [http://bit.ly/nottsdevputty](http://bit.ly/nottsdevputty)
* The Azure IoT Device Explorer Twin - http://bit.ly/nottsdevdevexplorer
* A laptop with an ethernet Socket, or a 2in1 device with a network adapter.
* If you want to play along with a real Temperature / Humidity Sensor Section, then you can order one from Amazon, it’s only £8!) - [http://bit.ly/nottsdevtempsensor](http://bit.ly/nottsdevtempsensor)
* If you want to bring your own parts so you can take them home and carry on playing, then you can buy the following from Amazon too;
  * This relatively inexpensive kit of electronic parts which will easily include enough for the evening - [http://bit.ly/nottsdeviotkit](http://bit.ly/nottsdeviotkit)
  * A Raspberry Pi kit including; A Raspberry Pi 3, A Memory Card, A Case and a Power Supply - [http://bit.ly/nottsdeviotraspi](http://bit.ly/nottsdeviotraspi)
* Your glasses if you struggle seeing small parts (for the electronics)!

You’re more than welcome to bring your own Raspberry Pi along, however, we won’t have much time to get this setup during the workshop, as this can take a little while. I’m hoping to publish a Blog Post detailing the setup steps required however, so keep your eyes peeled!

Please note. Neither the speaker nor Notts Dev Workshop are responsible for any damage to any components or hardware you may bring along.
    `,
    links: {
      title: 'Azure IoT Hubs, Raspberry Pi and Node.js',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/246681717/'
    },
    speakers: [
      {
        name: 'Peter Gallagher',
        avatar: '/images/speakers/Peter-Gallagher.jpg',
        // quote: 'To be or not to be',
        bio: ` Pete is Co-Organiser of Notts Dev Workshop and the owner of PJG Creations – A Software and IT consultancy based in Loughborough. Pete has experience of .net Desktop, Web Development in ASP, PHP and Javascript and even dabbles in a little Assembly Language from time to time!
        `
        ,
        links: {
          web: 'http://pjgcreations.co.uk',
          facebook: 'PJGCreations',
          twitter: 'PJGCreations',
          linkedin: 'in/pjgcreations/'
        }
      }
    ]
  },
  {
    date: '2017-12-05',
    time: '6:00pm',
    title: 'I Want It Now!: Provisioning SQL Server Containers',
    link: 'sqlserver_containers',
    location: 'unidays_nottingham',
    // attachment: './attachments.zip',
    summary: ` Developers need a copy of the production database, and they need it now! How do you get a database with production-like data to them quickly and easily?
    `,
    description: `  Your developers need a copy of the production database, and they need it now! How do you keep up with the shift towards agile development? VMs are a good solution, but we can make environments easier to manage, smaller, and cheaper with containers. Containers let you run SQL Server in an isolated, lightweight environment but working with them can be tricky. In this session I'll explain the different types of containers available for SQL Server, why some options are better than others, and why they're worth considering. We’ll spin up some instances of SQL Server using Docker and Windocks and talk about the advantages and limitations of containerising SQL Server.
    `,
    what_you_will_need: ` Windows 10 is required for Docker, plus the docker client. Docker requires Hyper-v be enabled, at least for startup. I’ll also provide a VM that we can use to look at Windocks, a Windows-only container solution
    `,
    links: {
      title: 'I Want It Now!: Provisioning SQL Server Containers',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/mkmsrnywqbhb/'
    },
    speakers: [
      {
        name: 'Neil Holmes',
        avatar: '/images/speakers/neil-holmes.jpg',
        // quote: 'To be or not to be',
        bio: `Neil has been a DBA for about 8 years now, working in varied environments.
          He's the Senior DBA for Rascal Systems based in Nottingham, and currently sits in the middle of a DevOps development team, and has not yet been murdered by them.
        `
        ,
        links: {
          web: 'http://withrecovery.com',
          twitter: 'Nullh',
          linkedin: 'in/nullh/'
        }
      }
    ]
  },
  {
    date: '2017-11-07',
    time: '6:00pm',
    title: 'Introduction to the SharePoint Framework',
    link: 'sharepoint_framework',
    location: 'unidays_nottingham',
    // attachment: './attachments.zip',
    summary: ` Modern web development on SharePoint? Why not!
    Come to this workshop to find more information about how to create web parts and extensions for SharePoint Online. See how the SharePoint world changed and how being a SharePoint developer is fun now!
    `,
    description: `
    Modern web development on SharePoint? Why not!
    Come to this workshop to find more information about how to create web parts and extensions for SharePoint Online. See how the SharePoint world changed and how being a SharePoint developer is fun now!

    In this session, you will learn what the SharePoint Framework is, how to develop your first web part and extension and how to deploy it on SharePoint.
    `,
    what_you_will_need: `
    ·  Your computer (Mac, Windows, Linux)
    ·  IDE for JavaScript (like Visual Studio Code)
    ·  Installed components:
    o  node.js
    o  bower (npm install -g bower)
    o  Yeomen (npm install -g yo)
    o  TypeScript (npm install -g tsd)
    o  Gulp (npm install -g gulp-cli)
    o  SharePoint Generator: (npm i @microsoft/generator-sharepoint)
    ·  SharePoint Online subscription (you can get one free from dev.office.com)
    `,
    links: {
      title: 'Introduction to the SharePoint Framework',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/244087744/'
    },
    speakers: [
      {
        name: 'Gosia Borzecka',
        avatar: '/images/speakers/Gosia-Borzecka.jpg',
        bio: `Gosia Borzecka works as a full stack .NET developer. While searching for her path, she has been working as a network administrator and IT systems supervisor according to Prince2 and ITIL methodologies. Currently, she loves programming and looking for news related to it, to which she devotes most of her time. While she started work with Office 365 and SharePoint she found an opportunity to add more fun to existing business apps using the newest technology provided by Microsoft.  After work, she teaching kids programming and co-organizing workshop meetup:  NottsDevWorkshop!`
        ,
        links: {
          web: 'http://gosiaborzecka.net',
          facebook: 'gosia.borzecka',
          twitter: 'gosiaborzecka'
        }
      }
    ]
  },
  {
    date: '2017-10-03',
    time: '5:30pm',
    title: 'ChatBots',
    link: 'chatbots',
    location: 'unidays_nottingham',
    // attachment: './attachments.zip',
    summary: ` Join us with our guest speaker Manthan Dave with his talk:
    "Up and running with chat bots: A journey from being a noob to being awesome"
    `,
    description: ` The chat bot revolution is upon us and every developer wants to build one. This workshop will take them on an epic journey starting from basics and writing a simple chat bot, all the way to learning advanced concepts.
    Ever wondered what goes behind a good chat bot? Do you want to build one? Well this workshop is for you!
    Complexity can be diffused as soon as you peek behind the curtain. A chat bot, like a website might look complex from the outside, but the reality is different.
    This workshop will be divided into three sections. The first section will cover the basic anatomy of a chat bot. Next, we'll work together to build a chat bot. We'll start simple with a chat bot that'll tell us knock knock and chuck norris jokes. Towards the end of the workshop, we'll go over some advanced concepts that can help us scale our chat bot to have more features.
    `,
    what_you_will_need: `
    * Git
    * Node.js
    * npm
    `,
    links: {
      title: 'ChatBot',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/243014116/'
    },
    speakers: [
      {
        name: 'Manthan Dave',
        avatar: '/images/speakers/Manthan-Dave.jpg',
        bio: `Manthan Dave like drones, robots and tech in general. He make awesome things. Bit by bit.
        "I have mostly been a full stack / backend engineer throughout my career. As of now, I am a Principal Associate Software Engineer (SDE III) at Capital One. I have been looking into chat bots since I graduated however, at the time, there was never a guide or a straight up book on it. So after a million failures, I was finally able to put together a framework that allows people to easily build chat bots. This framework is Talkify and is available on github at https://github.com/manthanhd/talkify. The framework encapsulates the concepts and theories that I have learned and put together over time. I believe that these concepts are transferrable across any language or even frameworks. I am continually working on talkify to make it better all the time as I encounter more problems. As part of my day job, I am also working on a secondary project involving chat bots.`
        ,
        links: {
          web: 'https://www.manthanhd.com/',
          twitter: 'davemanthan'
        }
      }
    ]
  },
  {
    date: '2017-09-07',
    time: '5:30pm',
    title: 'Making conversation with Alexa',
    link: 'making_conversation_with_alexa',
    location: 'hacker_space_nottingham',
    // attachment: './attachments.zip',
    summary: `We go through the stages of building two Alexa Skills using C# and AWS Lambda, showing how users can take advantage of them through an Amazon Dot.
    `,
    description: `With the rise in popularity of smart speakers in the home, we look at how to get our users to interact with our service through the Alexa assistant and an Amazon Dot.
In this session we'll walk through the building of two Alexa skills, discussing the underlying structures and adding functionality a piece at a time.

We'll be focusing on the important areas of skills development:

•	The different ways Alexa can talk to us
•	How we can make her pay attention to what we're saying
•	Authenticating our users to allow personalisation
•	How conversations require us to think about user interaction in a different way.

And we'll be deploying the skills through AWS Lambda, a serverless solution allowing us to get start quickly and not get too sidetracked on deployment.

    `,
    what_you_will_need: `
•	The demos will be in C#, so to write the skills alongside the demos developers will need Visual Studio - preferably with the AWS Toolkit for .NET installed (VS Community edition is free to download)
•	To deploy the services developers will need an AWS account (an account can be set up for free at [Amazon AWS](https://aws.amazon.com) - we won't be doing anything that requires more than the free tier)
    `,
    links: {
      title: 'Making conversation with Alexa',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/242790675/'
    },
    speakers: [
      {
        name: 'Steven Pears',
        avatar: '/images/speakers/steven_pears.jpg',
        //quote: 'To be or not to be',
        bio: `Steven has been enjoying .NET since the beta landed on his desk next to his folder full of MSDN CDs. Somehow maintaining gainful employment while at the same time loving regular expressions, local newspaper companies and construction software have created a path that led him to Nottingham where he now works for Experian.`
        ,
        links: {
          twitter: 'StevenPears'
        }
      }
    ]
  },
  {
    date: '2017-08-04',
    time: '5:30pm',
    title: 'Getting started with DevOps',
    link: 'getting_started_with_DevOps',
    location: 'hacker_space_nottingham',
    // attachment: './attachments.zip',
    summary: `If you are looking at DevOps for your organisation, looking at implementing the best practices for your pipeline or just curious about DevOps in general this is the workshop for you!
    `,
    description: `DevOps is many things and there is no formal description or label for it. So why not putting a small application in the cloud and try out yourself what this means? We are going to go through the creation of a pipeline, the definition of your Infrastructure as Code, the packaging process and eventually the release. We are also going to approach more advanced practices like silent deployments, feature flags and the use of telemetry in your application.
    `,
    what_you_will_need: `
* Laptop
* [Visual Studio 2017](https://www.visualstudio.com/downloads/)
* [Azure Tools for Visual Stuio](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio#install-workloads)
* [Azure PowerShell](https://docs.microsoft.com/en-gb/powershell/azure/overview?view=azurermps-4.1.0)
* [Azure Account](https://portal.azure.com)
* [VSTS Account](https://app.vsaex.visualstudio.com/)
    `,
    links: {
      title: 'Getting started with DevOps by Matteo Emilli',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/241604961/'
    },
    speakers: [
      {
        name: 'Matteo Emilli',
        avatar: '/images/speakers/Matteo-Emilli.jpg',
        //quote: 'To be or not to be',
        bio: `Matteo Emili is a Microsoft MVP for Visual Studio and Development Technologies since 2010. Former Microsoft Student Partner (youngest ever in Italy and the first ever in being both MSP and MVP, in 2010 at the age of 19), his experience spreads from Universities, going through small businesses to the largest worldwide enterprises.
His focus on software engineering tied with business processes led him to have a deep knowledge of different topics and technologies, from development to virtualization, and he has a passion for Agile Methodologies, Processes and all the techie stuff around the code, which leads him to always searching for something new to share with the worldwide community around the Application Lifecycle Management and DevOps fields.
He currently works for One Identity as an Application Lifecycle Management and DevOps advisor.
`
        ,
        links: {
          web: 'mattvsts.blogspot.com',
          //facebook: '',
          twitter: 'MattVSTS'
        }
      }
    ]
  },
  {
    date: '2017-07-03',
    time: '5:30pm',
    title: 'Introduction to SSAS Tabular Mode',
    link: 'introduction_to_sass_tabular_mode',
    location: 'accelerate_places_nottingham',
    // attachment: './attachments.zip',
    summary: `
This workshop will introduce SASS Tabular Mode.
    `,
    description: `
In this session, we will make first steps to get acquainted with SSAS Tabular. We, therefore, will answer the following questions:

What is the purpose of SSAS Tabular?

What are the differences to SSAS Multidimensional?

How to get started with SSAS Tabular?

What is DAX and do I need it?

And what does SSAS Tabular offer for developers?

The plan is to keep the theoretical part as short as possible and to play around with demos. If you want to try some of the stuff on your own, bring your notebook. You’ll need either a local version of SQL Server 2016 (Standard, Enterprise or Developer) or you can use Azure Analysis Services. 
    `,
    what_you_will_need: `
* For PowerPivot example, you will need a version of Excel with the PowerPivot Add-in installed and activated.
    `,
    links: {
      title: 'Introduction to SASS Tabular Mode by Gabi Münster',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/239010974/'
    },
    speakers: [
      {
        name: 'Gabi Münster',
        avatar: '/images/speakers/gabi-muster.jpg',
        // quote: 'To be or not to be',
        bio: `
        Gabi Münster is a BI consultant at oh22data AG since 2010. With SQL Server experience since version 2000, her main topics are SSAS, SSRS and MDS. She is regional chapter lead at PASS Germany and speaker at national and international events since 2012.`
        ,
        links: {
          // web: '',
          facebook: 'gabi.munster',
          twitter: 'SQLMissSunshine'
        }
      }
    ]
  },
  {
    date: '2017-05-02',
    time: '5:30pm',
    title: 'Azure Data Lake - The Services. The SQL. The Sharp. (Hands on Workshop)',
    link: 'azure_data_lake',
    location: 'accelerate_places_nottingham',
    // attachment: './attachments.zip',
    summary: `
Do you want to learn about Azure Data Lake and unlock the power of big data analytics with USQL? If so, then come to this workshop with your laptop to start developing data solutions with in the Microsoft cloud!
    `,
    description: `
How do we implement Azure Data Lake?
How does a lake fit into our data platform architecture? Is Data Lake going to run in isolation or be part of a larger pipeline?
How do we use and work with USQL?
Does size matter?!
The answers to all these questions and more in this session as we immerse ourselves in the lake, that’s in a cloud.
We'll take an end to end look at the components and understand why the compute and storage are separate services.
For the developers, what tools should we be using and where should we deploy our USQL scripts. Also, what options are available for handling our C# code behind and supporting assemblies.
We’ll cover everything you need to know to get started developing data solutions with Azure Data Lake.
    `,
    what_you_will_need: `
·  Laptop

·  Visual Studio with Azure SDK and Azure Data Lake Tools Both available out of the box in VS 2017 Community Edition!

·  A Microsoft account.

·  A love of data.
    `,
    links: {
      title: 'Azure Data Lake by Paul Andrew and Alex Whittles',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/238644045/'
    },
    speakers: [
      {
        name: 'Paul Andrew',
        avatar: '/images/speakers/Paul-Andrew.jpg',
        // quote: 'To be or not to be',
        bio: `
  Paul has 10+ years’ experience working with the complete on premises SQL Server stack in a variety of roles and industries. Now as the senior developer at Purple Frog Systems has turned his keyboard to business intelligence solutions in the Microsoft cloud. Specialising in real-time data streaming with the internet of things (IoT), Azure Data Lake Analytics and Data Factory orchestration for big data platforms. Paul is also a STEM Ambassador for the networking education in schools’ programme, PASS chapter leader for the Microsoft Data Platform Group – Birmingham, SQL Relay/SQL Saturday speaker as well as very active member of the technical community.
     `,
        links: {
          web: 'https://www.purplefrogsystems.com/paul/',
          twitter: 'mrpaulandrew'
        }
      },
      {
        name: 'Alex Whittles',
        avatar: '/images/speakers/alex-whittles.jpg',
        // quote: 'To be or not to be',
        bio: `
  Alex is a Data Platform MVP, and is the owner and principle consultant at Purple Frog, a Microsoft Data Platform Business Intelligence consultancy in the UK with multinational clients in a variety of sectors. He specialises in all aspects of data modelling, data warehousing, ETL and cubes using the SQL Server stack. Alex has an MSc in Business Intelligence, is a chartered engineer, is on the organising committee for both SQLBits and SQL Relay, and co-leader of the Birmingham Data Platform user group. Alex is also a regular speaker at many SQL Server events around the world including SQL Relay, SQL Bits, SQL Saturdays, 24 HOP and the PASS Summit.
     `,
        links: {
          web: 'https://www.purplefrogsystems.com/',
          facebook: '758848337',
          twitter: 'PurpleFrogAlex'
        }
      }
    ]
  },
 {
    date: '2017-04-05',
    time: '5:30pm',
    title: 'Introduction to Azure Services',
    link: 'introduction_to_azure_services',
    location: 'accelerate_places_nottingham',
    // attachment: './attachments.zip',
    summary: `
This workshop will introduce you to Azure Services. You will let know about databases, virtual network, machines (not only virtual), security, storage...
    `,
    description: `
Azure Services. Amazon Web Services. Cloud Computing.
In February we celebrate the 7th anniversary of Azure Services (formerly known as Windows Azure)
actually called Microsoft Azure. Some of the use it daily. Some of us trying to pass some test of
'how to use it'. So let‘s talk about it.
During workshop – as similar to the previous one by Rob, without slides – we will dive into azure services:
databases, virtual network, machines (not only virtual), security, storage.
All of the basics – but not limited to – stuff. 
We will discuss a little about SWOT analysis, costs, pros, and cons, risk, fun, and joy of work with The Clouds.
And of course, we use different tools and forms to work with the clouds like Pizza and Beer.
    `,
    what_you_will_need: `
* If you want to play with the speaker than bring your laptop with any browser.. and azure subscription.
* Otherwise just feel free to come and enjoy the talk.
    `,
    links: {
      title: 'Introduction for Azure Services by Tobiasz Koprowski',
      meetup: 'https://www.meetup.com/Notts-Dev-Workshop/events/238614798'
    },
    speakers: [
      {
        name: 'Tobiasz Koprowski',
        avatar: '/images/speakers/tobiasz-koprowski.jpg',
        // quote: 'To be or not to be',
        bio: `
  Tobiasz is a community leader focused on SQL Server, Sharepoint, security, collaboration and ITIL, DR, BCM, SLA. Love licensing stuff. CEO at Shadowland Consulting. Microsoft Certified Trainer, freelancer, consultant. Member of the Boards: Polish Information Processing Society and ISSA Poland. Member of MTC, SME, Friends of RedGate PLUS. Member of PASS, SUGUK, PLSSUG, ISSA, ACM and several communities in the world. Data Platform MVP from July 2010. Former president of the Polish SQL Server User Group. Godfather of SQLDay Conference. An active blogger, international speaker. Co-author of SQL Server MVP Deep Dives Volume Two. STEM Ambassador. In free time traveler, cyclist, photographer. Coffee addicted.
     `,
        links: {
          web: 'http://koprowskit.eu/geek/',
          facebook: 'tobiasz.koprowski',
          twitter: 'koprowskit'
        }
      }
    ]
  },
  {
    date: '2017-03-06',
    time: '5:30pm',
    title: 'An Introduction to PowerShell',
    link: 'an_introduction_to_powershell',
    location: 'accelerate_places_nottingham',
    // attachment: './attachments.zip',
    summary: `
This workshop will introduce PowerShell to IT professionals and will cover the basic information required to be able to start writing PowerShell Scripts, Functions and Modules using PowerShell ISE and VS Code.
    `,
    description: `
We will cover topics

* Introduction to the ISE and VS Code
* PowerShell Syntax
* Finding Commands, how to use them and how to explore objects
* Understanding Errors
* Writing modules, functions and scripts

Introduction to Testing with Pester
At the end of the workshop attendees can expect to feel comfortable with using PowerShell and capable of writing their own PowerShell code
    `,
    what_you_will_need: `
* Computer with OS Windows (10, 8.1, 7)
* Installed PowerShell 5 or above
* Windows 10 or 8.1: is available by default
* Windows 7: can be installed via link: [PowerShell](https://www.microsoft.com/en-us/download/details.aspx?id=50395)
* [Visual Studio Code](https://code.visualstudio.com/)
* [PowerShell extension for Visual Studio Code](https://blogs.msdn.microsoft.com/cdndevs/2015/12/11/visual-studio-code-powershell-extension/)
    `,
    links: {
      eventbrite_id: 31581666615
    },
    speakers: [
      {
        name: 'Rob Sewell',
        avatar: '/images/speakers/rob-sewell.jpg',
        // quote: 'To be or not to be',
        bio: `
Rob is a SQL Server DBA with a passion for Powershell, Azure, Automation, and SQL (PaaS geddit?). He is an officer for the PASS PowerShell Virtual Chapter and has spoken at and volunteered at many events. He is a member of the committee that organises SQL Saturday Exeter and also European PowerShell Conference. He is a proud supporter of the SQL and Powershell communities.

He relishes sharing and learning and can be found doing both via Twitter and his blog. He spends most of his time looking at a screen and loves to solve problems. He knows that looking at a screen so much is bad for him because his wife tells him so. Thus, you can find him on the cricket field in the summer and flying a drone in the winter. He has a fabulous beard.
        `,
        links: {
          web: 'https://sqldbawithabeard.com',
          facebook: 'sqldbawithabeard',
          twitter: 'sqldbawithbeard'
        }
      }
    ]
  }
];
