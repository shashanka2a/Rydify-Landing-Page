import React, { useState, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { track } from '@vercel/analytics';
import { Button } from '../src/components/ui/button';
import { Card, CardContent } from '../src/components/ui/card';
import { Search, Users, Star, Check, Menu, X, Smartphone, Shield, MapPin, Clock, DollarSign, Zap, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Preload critical resources on mount
    React.useEffect(() => {
        // Preload framer-motion on user interaction
        const preloadMotion = () => import('framer-motion');

        // Preload on first user interaction
        const handleFirstInteraction = () => {
            preloadMotion();
            document.removeEventListener('mouseenter', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
        };

        document.addEventListener('mouseenter', handleFirstInteraction, { once: true });
        document.addEventListener('touchstart', handleFirstInteraction, { once: true });

        return () => {
            document.removeEventListener('mouseenter', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
        };
    }, []);

    // Analytics tracking functions - memoized for performance
    const trackButtonClick = useCallback((buttonName: string, location: string) => {
        track('Button Click', {
            button: buttonName,
            location: location,
            timestamp: new Date().toISOString()
        });
    }, []);

    const trackNavigation = useCallback((section: string) => {
        track('Navigation', {
            section: section,
            timestamp: new Date().toISOString()
        });
    }, []);

    // Memoized feature data to prevent re-renders
    const featuresData = useMemo(() => [
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Students Only",
            description: "Every user is verified with a .edu email - no strangers, just classmates",
            color: "teal",
            bgColor: "bg-teal-100",
            iconColor: "text-teal-600"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure Verification",
            description: "OTP authentication and driver license verification for your safety",
            color: "emerald",
            bgColor: "bg-emerald-100",
            iconColor: "text-emerald-600"
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Split Costs Fairly",
            description: "Transparent pricing that automatically splits gas and tolls among riders",
            color: "blue",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Campus-Focused Routes",
            description: "Popular routes between dorms, campus, airports, and home for breaks",
            color: "purple",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        }
    ], []);


    // Testimonials functionality commented out for pre-launch
    /*
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Junior, Business Major",
            avatar: "S",
            color: "bg-teal-600",
            text: "Rydify has completely changed how I get around campus. I've met so many amazing people and saved tons of money on transportation!"
        },
        {
            name: "Marcus Johnson",
            role: "Senior, Engineering",
            avatar: "M",
            color: "bg-emerald-600",
            text: "As a driver, Rydify helps me cover gas costs while helping fellow students. The verification system makes me feel safe picking up riders."
        },
        {
            name: "Alex Rivera",
            role: "Sophomore, Psychology",
            avatar: "A",
            color: "bg-blue-600",
            text: "Perfect for getting to internships downtown. Reliable, affordable, and I love that it's eco-friendly too. Highly recommend!"
        },
        {
            name: "Emma Wilson",
            role: "Senior, Art Major",
            avatar: "E",
            color: "bg-purple-600",
            text: "The app is so intuitive and the community of student drivers is amazing. I feel safe and supported every ride!"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    */

    return (
        <>
            <Head>
                <title>Rydify - Student Rideshare Platform</title>
                <meta name="description" content="Safe, Shared, Smart rides for students. Connect with fellow students for affordable and eco-friendly rides across campus and beyond." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-white overflow-x-hidden">
                {/* Navigation - Slimmer Header */}
                <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <motion.div
                                className="flex items-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="bg-teal-600 text-white p-2 rounded-lg font-bold text-xl w-10 h-10 flex items-center justify-center">
                                    R
                                </div>
                                <span className="ml-2 text-xl text-gray-900 font-bold">Rydify</span>
                            </motion.div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-8">
                                <motion.a
                                    href="#how-it-works"
                                    className="text-gray-600 hover:text-teal-600 transition-colors relative"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onClick={() => trackNavigation('How it works')}
                                >
                                    How it works
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-teal-600"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                                <motion.a
                                    href="#app"
                                    className="text-gray-600 hover:text-teal-600 transition-colors relative"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onClick={() => trackNavigation('App')}
                                >
                                    App
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-teal-600"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                                {/* Reviews link commented out for pre-launch */}
                                {/* 
                                <motion.a
                                    href="#testimonials"
                                    className="text-gray-600 hover:text-teal-600 transition-colors relative"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    Reviews
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-teal-600"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                                */}
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outline"
                                        className="text-teal-600 border-teal-600 hover:bg-teal-50"
                                        onClick={() => {
                                            trackButtonClick('Sign In', 'Navigation');
                                            window.open('https://www.rydify.app/auth/login?redirect=%2Fprofile', '_blank');
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        className="bg-teal-600 hover:bg-teal-700"
                                        onClick={() => {
                                            trackButtonClick('Download App', 'Navigation');
                                            window.open('https://www.rydify.app/rides', '_blank');
                                        }}
                                    >
                                        Download App
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </motion.button>
                        </div>

                        {/* Mobile Menu */}
                        <motion.div
                            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isMenuOpen ? 1 : 0,
                                height: isMenuOpen ? 'auto' : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="py-4 space-y-4 border-t border-gray-200 mt-4">
                                <a href="#how-it-works" className="block text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>How it works</a>
                                <a href="#app" className="block text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>App</a>
                                {/* <a href="#testimonials" className="block text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</a> */}
                                <div className="flex flex-col space-y-2 pt-2">
                                    <Button
                                        variant="outline"
                                        className="text-teal-600 border-teal-600 hover:bg-teal-50"
                                        onClick={() => {
                                            trackButtonClick('Sign In', 'Mobile Navigation');
                                            window.open('https://www.rydify.app/auth/login?redirect=%2Fprofile', '_blank');
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                    <Button
                                        className="bg-teal-600 hover:bg-teal-700"
                                        onClick={() => {
                                            trackButtonClick('Download App', 'Mobile Navigation');
                                            window.open('https://www.rydify.app/rides', '_blank');
                                        }}
                                    >
                                        Download App
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-teal-50 to-emerald-50 pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-10 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-40 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-20"
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, -180, -360]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-300 rounded-full opacity-20"
                            animate={{
                                x: [0, 30, 0],
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <motion.h1
                                    className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-8 leading-tight font-bold text-center lg:text-left"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    Expensive Uber or Crowded buses?<br />
                                    <motion.span
                                        className="text-teal-600 inline-flex items-center gap-3"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        Introducing Rydify 🚗
                                    </motion.span>
                                </motion.h1>

                                {/* Quick Benefits Icons */}
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl">✅</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">Verified Students</p>
                                            <p className="text-xs text-gray-600">.edu verify</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl">💸</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">Cheaper Travel</p>
                                            <p className="text-xs text-gray-600">Split costs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl">🔒</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">Secure Rides</p>
                                            <p className="text-xs text-gray-600">Ride tracking</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 text-sm bg-teal-50 p-4 rounded-lg border border-teal-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xs font-bold">UF</span>
                                        </div>
                                        <span className="text-gray-700 font-medium">University of Florida Verified</span>
                                    </div>
                                    <div className="hidden sm:block text-gray-400">•</div>
                                    <span className="text-gray-600">50% cheaper than rideshare apps</span>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            className="bg-teal-600 hover:bg-teal-700 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto btn-pill"
                                            onClick={() => {
                                                trackButtonClick('Get Started Free', 'Hero Section');
                                                window.open('https://www.rydify.app/auth/login?redirect=%2Fdriver%2Fonboarding', '_blank');
                                            }}
                                        >
                                            Get Started Free
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="text-teal-600 border-teal-600 hover:bg-teal-50 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 w-full sm:w-auto btn-pill transition-all duration-300"
                                            onClick={() => {
                                                trackButtonClick('Find Rides Now', 'Hero Section');
                                                window.open('https://www.rydify.app/rides', '_blank');
                                            }}
                                        >
                                            Find Rides Now
                                        </Button>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-8 text-sm text-gray-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                >
                                    <motion.div
                                        className="flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Shield className="h-4 w-4 text-teal-600 flex-shrink-0" />
                                        <span>College Email Verified</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Check className="h-4 w-4 text-teal-600 flex-shrink-0" />
                                        <span>Parent Notifications</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <MapPin className="h-4 w-4 text-teal-600 flex-shrink-0" />
                                        <span>Campus Routes Only</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="relative mt-8 lg:mt-0"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {/* Ride-Sharing Hero Graphics */}
                                <div className="relative z-10 bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl mx-4 sm:mx-0">
                                    <div className="flex flex-col items-center text-center">
                                        {/* Car with Route Visualization */}
                                        <motion.div
                                            className="bg-teal-100 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 relative"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            {/* Car Icon */}
                                            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                                            </svg>
                                            {/* Route dots */}
                                            <div className="absolute -top-1 -right-1 flex gap-1">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                                <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                            </div>
                                        </motion.div>

                                        {/* Driver and Passengers */}
                                        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                                            {/* Driver */}
                                            <div className="text-center">
                                                <div className="bg-teal-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg mb-1 relative">
                                                    D
                                                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                        <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-500">Driver</span>
                                            </div>

                                            {/* Arrow */}
                                            <div>
                                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </div>

                                            {/* Passengers */}
                                            <div className="flex gap-1 sm:gap-2">
                                                {[
                                                    { initial: 'A', color: 'bg-blue-500' },
                                                    { initial: 'M', color: 'bg-purple-500' }
                                                ].map((passenger, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="text-center"
                                                        animate={{ y: [0, -5, 0] }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            delay: i * 0.3
                                                        }}
                                                    >
                                                        <div className={`${passenger.color} text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm mb-1`}>
                                                            {passenger.initial}
                                                        </div>
                                                        <span className="text-xs text-gray-500">Rider</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                            Share the Ride, Split the Cost
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Verified students • Safe routes • Real-time tracking
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Stats Card - Hidden on mobile, visible on larger screens */}
                                <motion.div
                                    className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200 z-20"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="bg-green-600 p-2 rounded-full"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <DollarSign className="h-5 w-5 text-white" />
                                        </motion.div>
                                        <div>
                                            <motion.p
                                                className="font-semibold text-gray-900"
                                                animate={{ opacity: [0.7, 1, 0.7] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            >
                                                $3.50
                                            </motion.p>
                                            <p className="text-sm text-gray-500">Avg Campus Ride</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* University Partnership Badge - Hidden on mobile */}
                                <motion.div
                                    className="hidden sm:block absolute -top-6 -left-6 bg-orange-500 text-white p-3 rounded-full shadow-lg z-20"
                                    animate={{
                                        rotate: [0, 10, 0, -10, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Shield className="h-6 w-6" />
                                </motion.div>

                                {/* Additional floating elements - Hidden on mobile */}
                                <motion.div
                                    className="hidden sm:block absolute -top-4 -right-4 bg-emerald-500 p-3 rounded-full shadow-lg z-20"
                                    whileHover={{ scale: 1.1, rotate: 15 }}
                                    animate={{
                                        rotate: [0, 10, 0, -10, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Zap className="h-6 w-6 text-white" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Students Choose Rydify - Trust & Safety Focus */}
                <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Why Students Trust Rydify
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Built by students, for students. Safety and community come first.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {featuresData.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full bg-white/80 backdrop-blur-sm">
                                        <CardContent className="p-8">
                                            <div className="flex items-start gap-4">
                                                <motion.div
                                                    className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <div className={feature.iconColor}>
                                                        {feature.icon}
                                                    </div>
                                                </motion.div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl text-gray-900 mb-3 font-bold">{feature.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works - Step by Step Flow */}
                <section id="how-it-works" className="py-16 sm:py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                How It Works
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Get started in three simple steps
                            </p>
                        </motion.div>

                        {/* Vertical Step Flow with Progress Indicator */}
                        <div className="relative">
                            {/* Progress Line */}
                            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-teal-200 via-emerald-200 to-blue-200 hidden md:block"></div>
                            
                            <div className="space-y-12">
                            {[
                                {
                                    icon: "✍️",
                                    title: "Post a Ride",
                                    description: "Going somewhere? Post your route and departure time. Set your price and available seats.",
                                    color: "teal",
                                    bgColor: "bg-teal-100",
                                    borderColor: "border-teal-200"
                                },
                                {
                                    icon: "🔍",
                                    title: "Verify & Match",
                                    description: "Get matched with verified classmates heading the same direction. See their profile and reviews.",
                                    color: "emerald",
                                    bgColor: "bg-emerald-100",
                                    borderColor: "border-emerald-200"
                                },
                                {
                                    icon: "🚗🔐",
                                    title: "Ride Securely",
                                    description: "Share live location. In-app messaging. Emergency contacts notified. Arrive safely together.",
                                    color: "blue",
                                    bgColor: "bg-blue-100",
                                    borderColor: "border-blue-200"
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Step Number Circle */}
                                        <motion.div
                                            className={`${step.bgColor} ${step.borderColor} border-2 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 bg-white shadow-lg`}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-2xl">{step.icon}</span>
                                        </motion.div>
                                        
                                        {/* Step Content */}
                                        <div className="flex-1 pb-8">
                                            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                                <CardContent className="p-6">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed text-lg">
                                                        {step.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* App Features */}
                <section id="app" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div
                                className="lg:order-2 text-center lg:text-left"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4 sm:mb-6">
                                    Designed for <span className="text-teal-600">Students</span>
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                                    Our intuitive app makes ride-sharing simple and safe. With student verification, in-app messaging, and real-time tracking, you're always in control.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { icon: Shield, text: "College email verification required" },
                                        { icon: MapPin, text: "Real-time GPS tracking" },
                                        { icon: Users, text: "In-app secure messaging" },
                                        { icon: Clock, text: "Emergency contact features" }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ x: 10 }}
                                        >
                                            <motion.div
                                                className="bg-teal-600 p-2 rounded-full"
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <feature.icon className="h-4 w-4 text-white" />
                                            </motion.div>
                                            <span className="text-gray-700">{feature.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Interactive demo button */}
                                <motion.div
                                    className="mt-8"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3">
                                        Try Interactive Demo
                                    </Button>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="lg:order-1 relative"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Illustrated Phone Mockups */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:max-w-none">
                                    <motion.div
                                        className="space-y-6"
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="bg-white rounded-3xl p-6 shadow-2xl border-8 border-gray-800 relative overflow-hidden">
                                            {/* Phone Screen Content */}
                                            <div className="bg-gradient-to-b from-teal-50 to-white rounded-2xl h-80 p-4 relative">
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="bg-orange-500 w-8 h-8 rounded-lg flex items-center justify-center">
                                                            <span className="text-white text-xs font-bold">UF</span>
                                                        </div>
                                                        <span className="font-semibold text-gray-800">Rydify</span>
                                                    </div>
                                                    <div className="bg-green-100 px-2 py-1 rounded-full">
                                                        <span className="text-green-700 text-xs font-medium">Verified</span>
                                                    </div>
                                                </div>

                                                {/* Student Profile */}
                                                <div className="bg-white rounded-xl p-3 mb-4 shadow-sm">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
                                                            <span className="text-white font-bold">S</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-sm">Sarah Chen</p>
                                                            <p className="text-xs text-gray-500">Junior • Business Major</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Popular Campus Routes */}
                                                <div className="space-y-2 mb-4">
                                                    <p className="text-sm font-medium text-gray-700">Popular Routes</p>
                                                    <motion.div
                                                        className="bg-teal-100 rounded-lg p-2 text-center"
                                                        whileHover={{ scale: 1.02 }}
                                                    >
                                                        <span className="text-sm text-teal-700">🏠 Dorms → 📚 Library</span>
                                                    </motion.div>
                                                    <motion.div
                                                        className="bg-orange-100 rounded-lg p-2 text-center"
                                                        whileHover={{ scale: 1.02 }}
                                                    >
                                                        <span className="text-sm text-orange-700">🎓 Campus → 💼 Internship</span>
                                                    </motion.div>
                                                </div>

                                                {/* Safety Status */}
                                                <motion.div
                                                    className="absolute bottom-4 left-4 right-4 bg-green-500 text-white text-center py-2 rounded-lg text-sm flex items-center justify-center gap-2"
                                                    animate={{ opacity: [0.8, 1, 0.8] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <Shield className="h-4 w-4" />
                                                    <span>College Email Verified</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="space-y-6 pt-8"
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="bg-white rounded-3xl p-6 shadow-2xl border-8 border-gray-800 relative overflow-hidden">
                                            {/* Phone Screen Content */}
                                            <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl h-80 p-4 relative">
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="font-semibold text-gray-800">Campus to Downtown</h3>
                                                    <span className="text-sm text-green-600 font-medium">3 available</span>
                                                </div>

                                                {/* Student Driver Cards */}
                                                {[
                                                    { name: 'Alex M.', major: 'Engineering', year: 'Senior', price: '4', time: '3', rating: 4.9, car: 'Honda Civic' },
                                                    { name: 'Emma S.', major: 'Pre-Med', year: 'Junior', price: '5', time: '5', rating: 5.0, car: 'Toyota Camry' }
                                                ].map((driver, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="bg-white rounded-xl p-3 mb-3 shadow-sm border border-gray-100"
                                                        whileHover={{ scale: 1.02 }}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`${index === 0 ? 'bg-green-500' : 'bg-purple-500'} w-10 h-10 rounded-full flex items-center justify-center`}>
                                                                <span className="text-white text-sm font-bold">
                                                                    {driver.name.charAt(0)}
                                                                </span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <p className="font-medium text-sm">{driver.name}</p>
                                                                    <div className="bg-orange-100 px-2 py-0.5 rounded-full">
                                                                        <span className="text-orange-700 text-xs">UF</span>
                                                                    </div>
                                                                </div>
                                                                <p className="text-xs text-gray-500">{driver.year} • {driver.major}</p>
                                                                <div className="flex items-center gap-1 mt-1">
                                                                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                                                    <span className="text-xs text-gray-600">{driver.rating}</span>
                                                                    <span className="text-xs text-gray-400">• {driver.car}</span>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="font-semibold text-sm text-green-600">${driver.price}</p>
                                                                <p className="text-xs text-gray-500">{driver.time} min</p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}

                                                {/* Request Ride button */}
                                                <motion.div
                                                    className="absolute bottom-4 left-4 right-4"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <div className="bg-teal-600 text-white text-center py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                                                        <Users className="h-4 w-4" />
                                                        <span>Request Ride</span>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating feature badges */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-10"
                                    animate={{
                                        rotate: [0, 10, 0, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Shield className="h-6 w-6" />
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-10"
                                    animate={{
                                        y: [0, -10, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Smartphone className="h-6 w-6" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Testimonials - COMMENTED OUT FOR PRE-LAUNCH */}
                {/* 
                <section id="testimonials" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm text-gray-500 mb-6">Trusted by students at</p>
                            <div className="flex items-center justify-center gap-8 flex-wrap">
                                {[
                                    { name: 'University of Florida', color: 'bg-orange-500', abbr: 'UF' },
                                    { name: 'Florida State University', color: 'bg-red-600', abbr: 'FSU' },
                                    { name: 'University of Central Florida', color: 'bg-yellow-500', abbr: 'UCF' },
                                    { name: 'Florida International University', color: 'bg-blue-600', abbr: 'FIU' }
                                ].map((university, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={`${university.color} w-8 h-8 rounded-full flex items-center justify-center`}>
                                            <span className="text-white text-xs font-bold">{university.abbr}</span>
                                        </div>
                                        <span className="text-sm text-gray-700 font-medium">{university.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl text-gray-900 mb-4">
                                Real Stories from Real Students
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                See why over 15,000 students choose Rydify for safe, affordable campus transportation.
                            </p>
                        </motion.div>

                        <div className="relative max-w-4xl mx-auto">
                            <motion.div
                                className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative"
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="absolute top-4 left-4 text-6xl text-teal-200 font-serif">"</div>

                                <motion.div
                                    className="flex items-center justify-center mb-6"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <motion.div
                                            key={star}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: star * 0.1 }}
                                        >
                                            <Star className="h-6 w-6 text-yellow-400 fill-current mx-1" />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.p
                                    className="text-xl text-gray-600 text-center mb-8 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {testimonials[currentTestimonial].text}
                                </motion.p>

                                <motion.div
                                    className="flex items-center justify-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <motion.div
                                        className={`${testimonials[currentTestimonial].color} text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {testimonials[currentTestimonial].avatar}
                                    </motion.div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                                        <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <div className="flex items-center justify-center mt-8 gap-6">
                                <motion.button
                                    onClick={prevTestimonial}
                                    className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </motion.button>

                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300'
                                                }`}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.8 }}
                                        />
                                    ))}
                                </div>

                                <motion.button
                                    onClick={nextTestimonial}
                                    className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </motion.button>
                            </div>

                            <motion.div
                                className="mt-4 flex justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <div className="text-sm text-gray-400 flex items-center gap-2">
                                    <motion.div
                                        className="w-2 h-2 bg-teal-500 rounded-full"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    Auto-playing testimonials
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {[
                                { number: "4.9", label: "Average Rating", icon: Star },
                                { number: "10k+", label: "Happy Students", icon: Users },
                                { number: "50k+", label: "Rides Completed", icon: MapPin }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <motion.div
                                        className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <stat.icon className="h-8 w-8 text-teal-600" />
                                    </motion.div>
                                    <motion.h3
                                        className="text-3xl font-bold text-gray-900 mb-2"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {stat.number}
                                    </motion.h3>
                                    <p className="text-gray-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                */}


                {/* Footer */}
                <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="flex items-center mb-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="bg-teal-600 text-white p-2 rounded-lg font-bold text-xl w-10 h-10 flex items-center justify-center">
                                        R
                                    </div>
                                    <span className="ml-2 text-2xl text-white font-bold">Rydify</span>
                                </motion.div>
                                <p className="text-gray-400">
                                    Safe, shared, and smart rides for students, by students.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <motion.li
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.a
                                            href="#how-it-works"
                                            className="hover:text-teal-400 transition-colors"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            How it works
                                        </motion.a>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.15 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.a
                                            href="#app"
                                            className="hover:text-teal-400 transition-colors"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            App Features
                                        </motion.a>
                                    </motion.li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-white mb-4">Get Started</h4>
                                <div className="space-y-3">
                                    <motion.button
                                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors w-full text-left"
                                        onClick={() => {
                                            trackButtonClick('Footer CTA', 'Footer');
                                            window.open('https://www.rydify.app/auth/login?redirect=%2Fdriver%2Fonboarding', '_blank');
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Join as Driver
                                    </motion.button>
                                    <motion.button
                                        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors w-full text-left"
                                        onClick={() => {
                                            trackButtonClick('Footer CTA', 'Footer');
                                            window.open('https://www.rydify.app/rides', '_blank');
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Find Rides
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <p>&copy; 2025 Rydify. All rights reserved.</p>
                        </motion.div>
                    </div>
                </footer>

                {/* Floating CTA Button - Hidden on mobile to avoid conflict with sticky banner */}
                <motion.div
                    className="fixed bottom-6 right-6 z-50 hidden md:block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full px-6 py-4 text-lg font-semibold"
                        onClick={() => {
                            trackButtonClick('Floating CTA', 'Floating Button');
                            window.open('https://www.rydify.app/auth/login?redirect=%2Fdriver%2Fonboarding', '_blank');
                        }}
                    >
                        <div className="flex items-center gap-2">
                            🚗 Start a Ride
                        </div>
                    </Button>
                </motion.div>

                {/* Sticky Banner */}
                <motion.div
                    className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-4 shadow-2xl z-40 md:hidden"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                >
                    <div className="flex items-center justify-between max-w-sm mx-auto">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                            <span className="text-xl flex-shrink-0">🚗</span>
                            <span className="font-semibold text-sm truncate">Join Rydify with your .edu email</span>
                        </div>
                        <Button
                            size="sm"
                            className="bg-white text-teal-600 hover:bg-gray-100 font-semibold ml-3 flex-shrink-0"
                            onClick={() => {
                                trackButtonClick('Sticky Banner CTA', 'Sticky Banner');
                                window.open('https://www.rydify.app/auth/login?redirect=%2Fdriver%2Fonboarding', '_blank');
                            }}
                        >
                            Join
                        </Button>
                    </div>
                </motion.div>
            </div>
        </>
    );
}