export interface Event {
    id: string;
    title: string;
    category: 'Technical' | 'Non-Technical' | 'Gaming' | 'Workshop';
    description: string;
    fullDescription: string;
    date: string;
    location: string;
    image: string;
    participants: string;
    duration?: string;
    isFlagship?: boolean;
    status?: 'Upcoming' | 'Ongoing' | 'Registration' | 'Completed';
}

export const events: Event[] = [
    {
        id: '1',
        title: 'HackMatrix 2026',
        category: 'Technical',
        description: 'A 48-hour coding marathon where brilliant minds converge to solve real-world problems.',
        fullDescription:
            'HackMatrix 2026 is the premier hackathon of KJSIT, bringing together over 250 developers, designers, and innovators. Participants will have 48 hours to build solutions for tracks ranging from AI/ML, Blockchain, to Social Impact. Mentors from top tech companies will be available for guidance.',
        date: 'Mar 15, 2026',
        location: 'KJSIT Campus',
        image: 'https://placehold.co/600x400/000000/00ff00?text=HackMatrix',
        participants: '250+',
        duration: '48 Hours',
        isFlagship: true,
        status: 'Upcoming'
    },
    {
        id: '2',
        title: 'RoboWars Circuit',
        category: 'Technical',
        description: 'Build, program, and battle - the ultimate robotics competition.',
        fullDescription:
            'Step into the arena with your custom-built robots. RoboWars Circuit tests your engineering skills in a high-octane battle for supremacy. Categories include wired, wireless, and autonomous bots.',
        date: 'Apr 2, 2026',
        location: 'Auditorium',
        image: 'https://placehold.co/600x400/000000/00ff00?text=RoboWars',
        participants: '180+',
        duration: 'Full Day',
        isFlagship: true,
        status: 'Registration'
    },
    {
        id: '3',
        title: 'Cyber Siege Gaming',
        category: 'Gaming',
        description: 'ESports tournament featuring the top competitive games.',
        fullDescription:
            'Compete in Valorant, CS2, and Rocket League. The Cyber Siege Gaming tournament is open to all students, with a prize pool of over ₹50,000.',
        date: 'Mar 22, 2026',
        location: 'Lab Complex',
        image: 'https://placehold.co/600x400/000000/00ff00?text=Gaming',
        participants: '300+',
        duration: '2 Days',
        isFlagship: false,
        status: 'Upcoming'
    },
    {
        id: '4',
        title: 'AI & ML Symposium',
        category: 'Workshop',
        description: 'Deep dive into artificial intelligence and machine learning with hands-on sessions.',
        fullDescription:
            'Learn the fundamentals of Neural Networks and deploy your first ML model. This workshop is designed for beginners and intermediates alike.',
        date: 'Apr 10, 2026',
        location: 'Virtual + Campus',
        image: 'https://placehold.co/600x400/000000/00ff00?text=AI+ML',
        participants: '150+',
        duration: '6 Hours',
        isFlagship: true,
        status: 'Upcoming'
    },
    {
        id: '5',
        title: 'IoT Innovation Lab',
        category: 'Technical',
        description: 'Build smart solutions with IoT devices and explore the future of connected technology.',
        fullDescription:
            'Get hands-on with Arduino and Raspberry Pi. Create smart home projects and learn about MQTT and sensor integration.',
        date: 'May 5, 2026',
        location: 'IoT Lab',
        image: 'https://placehold.co/600x400/000000/00ff00?text=IoT+Lab',
        participants: '50+',
        duration: '4 Hours',
        isFlagship: false,
        status: 'Completed'
    },
    {
        id: '6',
        title: 'Tech Talk: Quantum Computing',
        category: 'Non-Technical',
        description: 'An introductory session on the concepts of Quantum Computing and its future.',
        fullDescription:
            'Join us for a talk by industry experts on how Quantum Computing is set to revolutionize cryptography and data processing.',
        date: 'Feb 20, 2026',
        location: 'Seminar Hall',
        image: 'https://placehold.co/600x400/000000/00ff00?text=Quantum',
        participants: '100+',
        duration: '2 Hours',
        isFlagship: false,
        status: 'Completed'
    }
];
