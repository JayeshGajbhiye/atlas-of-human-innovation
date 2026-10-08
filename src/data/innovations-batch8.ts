import { Innovation, Relationship } from '../types/innovation';

export const batch8Innovations: Innovation[] = [
  {
    id: 'transatlantic-telegraph',
    name: 'Transatlantic Telegraph Cable',
    aliases: ['Submarine Cable'],
    date: '1858 CE',
    date_numeric: 1858,
    date_precision: 'year',
    era: 'INDUSTRIAL_REVOLUTION',
    domain: 'COMMUNICATION',
    type: 'physical',
    region: 'Atlantic Ocean',
    civilization: 'Industrial Societies',
    lat: 53.9167,
    lng: -10.0833, // Valentia Island, Ireland
    overview: 'The first undersea cable laid across the Atlantic Ocean used for telegraph communications.',
    why_it_matters: 'Reduced the communication time between North America and Europe from ten days (the speed of a ship) to a matter of minutes. It was the Victorian equivalent of the internet.',
    problem_solved: 'Global communication was strictly bound by the physical speed of sea travel, making international diplomacy, stock trading, and news agonizingly slow.',
    mechanism: 'A copper core transmits electrical impulses representing Morse code. It was insulated by Gutta-percha (a natural latex impervious to seawater) and heavily armored with iron wire to survive the crush of the ocean floor.',
    historical_development: [
      {
        stage: 'First Attempt',
        period: '1857',
        description: 'Initial attempt fails when the cable snaps in the deep ocean.'
      },
      {
        stage: 'First Message',
        period: '1858',
        description: 'Queen Victoria sends a message to President James Buchanan, though the cable degrades and fails a few weeks later.'
      },
      {
        stage: 'Permanent Success',
        period: '1866',
        description: 'The SS Great Eastern lays a thicker, more durable cable that establishes permanent transatlantic communication.'
      }
    ],
    contributors: [
      {
        name: 'Cyrus West Field',
        role: 'inventor',
        contributionNote: 'The American businessman and financier who relentlessly pursued the project despite multiple failures.'
      },
      {
        name: 'William Thomson (Lord Kelvin)',
        role: 'co-developer',
        contributionNote: 'Developed the mirror galvanometer to read the incredibly faint electrical signals emerging from the 2,000-mile wire.'
      }
    ],
    predecessors: ['electric-telegraph', 'electric-battery'],
    successors: ['radio-telecommunication', 'internet-arpanet'],
    modern_legacy: 'Today, 99% of global internet data still travels through modern fiber-optic submarine cables mapped along these exact original routes.',
    sources: [
      {
        source: 'A Thread Across the Ocean (John Steele Gordon)',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Landing_of_the_Atlantic_Cable_of_1866%2C_Heart%27s_Content%2C_Newfoundland.jpg/330px-Landing_of_the_Atlantic_Cable_of_1866%2C_Heart%27s_Content%2C_Newfoundland.jpg',
      caption: 'Former undersea telegraph cable',
      attribution: 'Wikimedia Commons / Wikipedia',
      license: 'CC BY-SA / Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The first official message was sent on August 16, 1858.'
  },
  {
    id: 'graphical-user-interface',
    name: 'Graphical User Interface (GUI)',
    aliases: ['WIMP interface', 'Desktop Metaphor'],
    date: '1973 CE',
    date_numeric: 1973,
    date_precision: 'year',
    era: 'COMPUTING_AGE',
    domain: 'COMPUTING',
    type: 'software',
    region: 'California, USA',
    civilization: 'Modern Societies',
    lat: 37.3944,
    lng: -122.1481, // PARC
    overview: 'A visual way of interacting with a computer using items such as windows, icons, menus, and a pointer, rather than typing text commands.',
    why_it_matters: 'Democratized computing. By mapping abstract digital files to familiar physical metaphors (folders, trash cans, desktops), it allowed non-programmers to use computers effortlessly.',
    problem_solved: 'Computers required users to memorize complex command-line syntax (like MS-DOS or Unix) to perform basic tasks, severely limiting their mass appeal and utility.',
    mechanism: 'A display server renders a bitmapped graphical display. A hardware pointing device (mouse) maps human hand movements to an on-screen cursor, interacting with bounding boxes representing active programs.',
    historical_development: [
      {
        stage: 'The Mother of All Demos',
        period: '1968',
        description: 'Douglas Engelbart demonstrates the mouse, windows, and hypertext at the Fall Joint Computer Conference.'
      },
      {
        stage: 'Xerox Alto',
        period: '1973',
        description: 'Xerox PARC develops the Alto, the first computer with a fully realized modern GUI and mouse.'
      },
      {
        stage: 'Apple Macintosh',
        period: '1984',
        description: 'Apple commercializes the GUI, bringing it to the mass consumer market.'
      }
    ],
    contributors: [
      {
        name: 'Alan Kay / Xerox PARC',
        role: 'collective_culture',
        contributionNote: 'Developed the Alto and the WIMP (Windows, Icons, Menus, Pointer) paradigm.'
      },
      {
        name: 'Douglas Engelbart',
        role: 'theoretical_precursor',
        contributionNote: 'Invented the computer mouse and conceptualized visual interaction.'
      }
    ],
    predecessors: ['personal-computer', 'microprocessor-cpu'],
    successors: ['world-wide-web', 'smartphone-mobile'],
    modern_legacy: 'The standard interaction model for billions of PCs, laptops, and (via touch adaptation) mobile devices.',
    sources: [
      {
        source: 'Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age',
        sourceType: 'academic'
      }
    ],
    media: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Example_of_a_GUI.png/330px-Example_of_a_GUI.png',
      caption: 'A graphical user interface, or GUI, is a form of user interface that allows users to interact with electronic devices through graphical icon',
      attribution: 'Wikimedia Commons / Wikipedia',
      license: 'CC BY-SA / Public Domain'
    },
    confidence: 'VERIFIED',
    confidence_note: 'The Alto became operational on March 1, 1973.'
  }
];

export const batch8Relationships: Relationship[] = [
  {
    id: 'rel-telegraph-transatlantic',
    source: 'electric-telegraph',
    target: 'transatlantic-telegraph',
    relationship_type: 'EXTENDED',
    evidence: 'The submarine cable simply extended Morse\'s telegraph technology across the ocean floor.'
  },
  {
    id: 'rel-gui-smartphone',
    source: 'graphical-user-interface',
    target: 'smartphone-mobile',
    relationship_type: 'APPLIED',
    evidence: 'The smartphone adapted the visual metaphor of the GUI from a mouse pointer to a direct multi-touch finger interface.'
  },
  {
    id: 'rel-www-llm',
    source: 'world-wide-web',
    target: 'generative-ai-llm',
    relationship_type: 'DEPENDS_ON',
    evidence: 'Large Language Models could not exist without the immense, digitized corpus of human text provided by the World Wide Web for training data.'
  }
];

