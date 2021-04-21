<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function index()
    {
        $products = Comment::all()->toArray();
        return array_reverse($products);
    }

    public function store(Request $request)
    {
        $product = new Comment([
            'name' => $request->input('name'),
            'text' => $request->input('text'),
            'date' => $request->input('date'),

        ]);
        $product->save();

        return response()->json('Product created!');
    }

    public function show($id)
    {
        $product = Comment::find($id);
        return response()->json($product);
    }

    public function update($id, Request $request)
    {
        $product = Comment::find($id);
        $product->update($request->all());

        return response()->json('Product updated!');
    }

    public function destroy($id)
    {
        $product = Comment::find($id);
        $product->delete();

        return response()->json('Product deleted!');
    }
}
