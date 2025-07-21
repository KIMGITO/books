import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import Level from './level';
import { Cog, LineChart, Settings2 } from 'lucide-react';

export default function Settings() {
    return (
        <AppLayout>
            <AuthLayout description="Level Settings" title="Settings">
                <div className="grid gap-4">
                    <div className="flex justify-start gap-x-1 text-center md:grid-cols-3">
                        <div
                            className="flex justify-between gap-4 rounded-md border-1 border-purple-600 bg-secondary px-2 py-1 align-baseline text-xs text-purple-400"
                            onClick={() => {}}
                        >
                            <Cog className="" size={15} /> <p>Level </p>
                        </div>
                        <div
                            className="flex justify-between gap-1 rounded-md border-1 border-purple-600 bg-secondary px-2 py-1 align-baseline text-xs text-purple-400"
                            onClick={() => {}}
                        >
                            <Cog className="" size={15} /> <p>Level </p>
                        </div>
                    </div>
                    <Level />
                </div>
            </AuthLayout>
        </AppLayout>
    );
}
