<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGradeRequest extends FormRequest
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
            'name' => 'required|unique:grades,name|string|min:3|max:20',
            'short_name' => 'required|string|min:2|max:5|unique|grades,short_name',
            'teacher' => 'nullable|exists:teachers,id',
            'level' => 'required|numeric|exists:levels,id'
        ];
    }
}
