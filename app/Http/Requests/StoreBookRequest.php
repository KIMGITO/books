<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
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
            'title' => 'required|string|max:50|unique:books,title',
            'level' => 'nullable|exists:levels,id',
            'subject' => 'required|exists:subjects,id',
            'description' => 'nullable|string"max:255:min:10' ,
            'quantity' => 'required|integer|min:0',
            'cover_image' => 'nullable|string|', //can be updated for premium user
        ];
    }
}
