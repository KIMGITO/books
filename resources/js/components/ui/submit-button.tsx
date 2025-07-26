// custom submit button with loader on processing of data 

import { Loader } from "lucide-react";
import { Button } from "./button";


export default function SubmitButton({processing, isEdit}:{ processing?: boolean, isEdit?: boolean }) {
    return (
        <Button type="submit" variant={'ghost'} className={`${processing ? 'cursor-progress' : 'cursor-pointer'}`}>
                    {processing ? <Loader className="animate-spin" /> : `${isEdit ? 'Update' : 'Save'}`}
                </Button>
    )
}