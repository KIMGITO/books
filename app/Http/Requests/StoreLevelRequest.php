<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLevelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'name' => 'required|numeric|unique:levels,name',
            'description'=>'required|string:max:50',
           
        ];
    }

    public function attributes(){
        return [
            'name' => 'level name',
            'description' => 'description',
        ];
    }

    public function messages(){
        return [
            'name.required' => 'The level name is required.',
            'name.numeric' => 'The level name must be a number.',
            'name.unique' => 'The level name exists.',
            'description.required' => 'The description is required.',
            'description.string' => 'The description must be a text.',
            'description.max' => 'The description may not be greater than 50 characters.',
        ];
    }
}
