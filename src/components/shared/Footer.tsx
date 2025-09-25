import React from 'react';
import Logo from './Logo';
import Image from 'next/image';
import { navLinks } from '@/static/nav-menu';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Icons } from './Icons';

const Footer = () => {
    return (
        <div className='bg-[#F4F6F6] h-[400px]'>
            <div className='max-w-7xl w-full mx-auto h-[80%]'>
                <div className='flex flex-row justify-between items-start h-full py-14'>
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <h3 className='text-sm font-semibold mb-2'>Download App :</h3>
                            <div className='flex flex-row gap-3 items-center'>
                                <Image src='/app_store.png' width={140} height={50} alt='app_store' />
                                <Image src='/play_store.png' width={140} height={50} alt='play_store' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold mb-2'>Quick links 1</h1>
                        <div className="flex flex-col gap-4">
                            {navLinks?.map((data) => (
                                <Link key={data.id} href={data.href}>
                                    {data.label}
                                </Link>
                            ))}
                            <Link href='/'>
                                Detail Blog
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold mb-2'>Quick links 2</h1>
                        <div className="flex flex-col gap-4">
                            <Link href='/'>
                                Favourites
                            </Link>
                            <Link href='/'>
                                Cart
                            </Link>
                            <Link href='/'>
                                Sign In
                            </Link>
                            <Link href='/'>
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-7 h-full'>
                        <div>
                            <h1 className='text-lg font-semibold mb-2'>Contact Us</h1>
                            <div className="flex flex-col gap-4">
                                <div className='flex flex-row items-center gap-2'>
                                    <Phone className='w-4 h-4 text-[#749B3F]' />
                                    <p className='text-xs'> 1234 5678 90</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <Mail className='w-4 h-4 text-[#749B3F]' />
                                    <p className='text-xs'>Freshharvests@gmail.com</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <MapPin className='w-4 h-4 text-[#749B3F]' />
                                    <p className='text-xs'>Tanjung Sari Street, Pontinak, Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-sm font-semibold mb-2'>Accepted Payment Methods:</h3>
                            <div className='flex flex-row gap-3 items-center'>
                                <Image src='/visa.png' width={60} height={50} alt='app_store' />
                                <Image src='/paypal.png' width={60} height={50} alt='play_store' />
                                <Image src='/apple_pay.webp' width={60} height={50} alt='play_store' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300 w-full mb-5'></div>
                {/* copyright */}
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-xs font-semibold'>&copy; Copyright 2024, All Rights Reserved By Banana Studio</p>
                    <div className='flex flex-row gap-3 items-center'>
                        <p className='bg-gray-800 rounded-full p-2 text-white'>
                            <Icons.Twitter className="w-6 h-6 fill-[#fff]" />
                        </p>
                        <p className='bg-gray-800 rounded-full p-2 text-white'>
                            <Icons.Instagram className="w-6 h-6 fill-[#fff]" />
                        </p>
                        <p className='bg-gray-800 rounded-full p-2 text-white'>
                            <Icons.Facebook className="w-6 h-6 fill-[#fff]" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;