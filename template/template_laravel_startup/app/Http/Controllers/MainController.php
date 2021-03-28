<?php
namespace App\Http\Controllers;


class MainController extends Controller {
    public function home() {
        return view('pages/home');
    }
}