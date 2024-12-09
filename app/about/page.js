import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-8 md:px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">About Get Me Muscle</h1>
            <p className="text-lg mb-6">
                Get Me Muscle is a crowdfunding platform designed for fitness enthusiasts, trainers, and athletes to fund their fitness journeys with the support of their community. It&apos;s a space where your supporters can directly contribute to your fitness goals by buying you a virtual workout session or helping you get closer to your aspirations. Empower your fitness journey with the strength of your community.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="fIc.gif" alt="Support for Fitness Goals" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Support for Fitness Goals</h3>
                        <p>Your supporters are passionate about helping you achieve your fitness aspirations.</p>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="about.gif" alt="Contributions Made Easy" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contributions Made Easy</h3>
                        <p>Receive support in the form of contributions, directly helping you with your fitness journey.</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Fitness Enthusiasts</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Direct financial support to achieve fitness goals</li>
                <li className="mb-2">Engage with your supporters and build a fitness-focused community</li>
                <li className="mb-2">Access to a platform designed for fitness and wellness projects</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Supporters</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Directly contribute to the success of someone’s fitness journey</li>
                <li className="mb-2">Access to exclusive updates, fitness plans, and progress photos</li>
                <li className="mb-2">Be part of the motivation and inspiration for achieving fitness goals</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Collaborate with Fitness Experts</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Connect with trainers and athletes for personalized guidance</li>
                <li className="mb-2">Collaborate on challenges and group goals to stay motivated</li>
                <li className="mb-2">Expand your fitness knowledge and techniques</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Join a community of fitness enthusiasts and trainers</li>
                <li className="mb-2">Share progress, tips, and encouragement with like-minded individuals</li>
                <li className="mb-2">Participate in fitness challenges and events</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Access to Resources</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Gain access to curated workout plans and nutrition guides</li>
                <li className="mb-2">Receive mentorship from experienced trainers and athletes</li>
                <li className="mb-2">Stay updated on fitness trends and industry tips</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Recognition and Motivation</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Showcase your progress and inspire others in the community</li>
                <li className="mb-2">Feature in community spotlights and gain recognition</li>
                <li className="mb-2">Stay motivated with support from fans and fellow fitness enthusiasts</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">A Fitness-Focused Community</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Join a supportive, goal-oriented community that values growth and health</li>
                <li className="mb-2">Encourage and inspire each other to push boundaries</li>
                <li className="mb-2">Collaborate on challenges and celebrate achievements together</li>
            </ul>
        </div>
    );
};

export default About;

export const metadata = {
    title: "About - Get Me Muscle",
};