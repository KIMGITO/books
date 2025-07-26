import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import Level from './level';
import { Cog} from 'lucide-react';
import Classes from './classes';
import Subjects from './subjects';
import {  router } from '@inertiajs/core';
import {  Teacher , CLevel, Grade, Department} from '@/types';
import Departments from './departments';

interface Props  {
    departments:Department[]
    active: string;
    levels: CLevel[];
    teachers: Teacher[];
    classes: Grade[]
}

export default function Settings(props: Props,) {
    console.log(props.classes)
    return (
        <AppLayout>
            <AuthLayout description="Level Settings" title="Settings">
                <div className="grid gap-4">
                    <div className="flex justify-start text-center md:grid-cols-6">
                        <div
                            className={`${props.active == 'departments' ? 'flex justify-between gap-4 border-b-2 border-b-green-900 bg-secondary px-2 py-1 align-baseline text-xs text-green-400' : 'flex justify-between gap-4 border-purple-600 cursor-pointer bg-secondary px-2 py-1 align-baseline text-xs text-purple-400 hover:text-green-800 hover:border-b hover:border-b-green-800'}`}
                            onClick={() => {router.get('/departments')}}
                        >
                            <Cog className="" size={15} /> <p>Departments </p>
                        </div>
                        <div
                            className={`${props.active == 'subjects' ? 'flex justify-between gap-4 border-b-2 border-b-green-900 bg-secondary px-2 py-1 align-baseline text-xs text-green-400' : 'flex justify-between gap-4 border-purple-600 cursor-pointer bg-secondary px-2 py-1 align-baseline text-xs text-purple-400 hover:text-green-800 hover:border-b hover:border-b-green-800'}`}
                            onClick={() => {router.get('/subjects')}}
                        >
                            <Cog className="" size={15} /> <p>Subjects </p>
                        </div>
                        <div
                            className={`${props.active == 'levels' ? 'flex justify-between gap-4 border-b-2 border-b-green-900 bg-secondary px-2 py-1 align-baseline text-xs text-green-400' : 'flex justify-between gap-4 border-purple-600 cursor-pointer bg-secondary px-2 py-1 align-baseline text-xs text-purple-400 hover:text-green-800 hover:border-b hover:border-b-green-800'}`}
                            onClick={() => {router.get('/levels')}}
                        >
                            <Cog className="" size={15} /> <p>Levels </p>
                        </div>
                        <div
                            className={`${props.active == 'classes' ? 'flex justify-between gap-4 border-b-2 border-b-green-900 bg-secondary px-2 py-1 align-baseline text-xs text-green-400' : 'flex justify-between gap-4 border-purple-600 cursor-pointer bg-secondary px-2 py-1 align-baseline text-xs text-purple-400 hover:text-green-800 hover:border-b hover:border-b-green-800'}`}
                            onClick={() => {router.get('/grades')}}
                        >
                            <Cog className="" size={15} /> <p>Classes </p>
                        </div>
                    </div>
                    <div className={`${props.active == 'levels' ? '' : 'hidden'}`}>
                        <Level />
                    </div>
                    <div className={`${props.active == 'departments' ? '' : 'hidden'}`}>
                        <Departments departments={props.departments} />
                    </div>
                    <div className={`${props.active == 'classes' ? '' : 'hidden'}`}>
                        <Classes levels={props.levels} teachers={props.teachers} classes={props.classes}/>
                    </div>
                    <div className={`${props.active == 'subjects' ? '' : 'hidden'}`}>
                        <Subjects />
                    </div>
                </div>
            </AuthLayout>
        </AppLayout>
    );
}
