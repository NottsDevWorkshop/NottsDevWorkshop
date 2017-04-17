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
    date: '2017-05-02',
    time: '5:30pm',
    title: 'Azure Data Lake - The Services. The SQL. The Sharp. (Hands on Workshop)',
    link: 'azure_data_lake',
    location: 'accelerate_places_nottingham',
    // attachment: './attachments.zip',
    summary: `
Do you know Azure Data Lake? Do you know USQL? If not than come to this workshop with your laptop to started developing data solution with Azure Data Lake! 
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
