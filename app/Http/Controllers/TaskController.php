<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Task;

class TaskController extends Controller
{
    public function index () {
        $tasks = Task::all();
        return $tasks;
    }

    public function store (Request $request) {
        $task = new Task;
        $task->name = $request->input('name');
        $task->save();
        return response()->json($task);
    }

    public function update(Request $request, $id) {
        $task = Task::find($id);
        $task->name = $request->input('name');
        $task->save();
        return response()->json($task);
    }

	public function destroy(Request $request, $id) {
        $task = Task::find($id);
        $task->delete();
        return response()->json($task);
    }

}
