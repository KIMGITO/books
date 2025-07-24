<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSubjectRequest extends FormRequest
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
            'name' => 'required|string|min:3|max:50|unique:subjects,name',
            'code' => 'required|string|min:2|max:10|unique:subjects,code',
            'description' => 'nullable|string|max:255',
            'level' => 'required|integer|exists:levels,id',
            'department_id' => 'required|integer|exists:departments,id',
        ];
    }
}
