'use client';

import { AudioWaveform, BookOpen, BookPlus, Bot, ChartSpline, File, Files, FileSearch, FileStack, Frame, GalleryVerticalEnd, Group, Languages, Map, PieChart, PieChartIcon, School, ScrollText, Settings2, SquareTerminal, User2, UserCircle2, UserRoundPen, UserRoundPlus, Users } from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

// This is sample data.
const data = {
   

    navMain: [
        {
            title: 'Dashboard',
            url: '#',
            icon: Users,
            isActive: true,
            items: [
                {
                    title: 'Overview',
                    url: '#',
                    icon: PieChartIcon,
                },

                {
                    title: 'Teachers',
                    url: '#',
                    icon: User2,
                },
                {
                    title: 'Students',
                    url: '#',
                    icon: UserCircle2,
                },
                {
                    title: 'Books',
                    url: '#',
                    icon: BookOpen,
                },
            ],
        },
        {
            title: 'Activities',
            url: '#',
            icon: Bot,
            items: [
                {
                    title: 'Register Book',
                    url: '#',
                    icon: BookPlus,
                },
                {
                    title: 'Register Teacher',
                    url: '#',
                    icon: UserRoundPlus,
                },
                {
                    title: 'Register Student',
                    url: '#',
                    icon: UserRoundPen,
                },

                {
                    title: 'Issue Book',
                    url: '#',
                    icon: GalleryVerticalEnd,
                },
                {
                    title: 'Return book',
                    url: '#',
                    icon: AudioWaveform,
                },
            ],
        },
        {
            title: 'Reports',
            url: '#',
            icon: File,
            items: [
                {
                    title: 'Book List Doc ',
                    url: '#',
                    icon: ScrollText,
                },
                {
                    title: 'Issue books Doc',
                    url: '#',
                    icon: Files,
                },
                {
                    title: 'Due Books Doc',
                    url: '#',
                    icon: FileStack,
                },
                {
                    title: 'Defaulters Doc',
                    url: '#',
                    icon: FileSearch,
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'Departments',
                    url: '#',
                    icon: Group,
                },
                {
                    title: 'Subjects',
                    url: '#',
                    icon: Languages,
                },
                {
                    title: 'Levels',
                    url: '#',
                    icon: ChartSpline,
                },
                {
                    title: 'Classes',
                    url: '#',
                    icon: School,
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    }; 


    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                {/* <TeamSwitcher teams={data.teams} /> */}
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
