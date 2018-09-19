<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/16
 * Time: 8:57
 */

namespace app\index\controller;


use app\index\model\Answer;
use app\index\model\Arrangement;
use app\index\model\Option;
use app\index\model\Question;
use app\index\model\Survey;
use app\index\model\Users;
use think\Request;

class Manage extends Par
{
//    var $user_id;
//    public function __construct()
//    {
//        $this->user_id=session('user_id');
//    }
    public function index()
    {

        $user_id = session('user_id');
//        $user=Users::get($user_id);
        $arranges = Arrangement::all(['id' => $user_id]);
//        var_dump($arranges);
        $surveys = array();
        foreach ($arranges as $arrange) {
            $survey = Survey::get(['sid' => $arrange->sid]);
            array_push($surveys, $survey);
        }
        $this->assign('surveys', $surveys);
        return $this->fetch();
    }

    public function add($survey_id)
    {
        $arranges = Arrangement::all(['sid' => $survey_id]);
        $people = array();
        foreach ($arranges as $arrange) {
            $user = Users::get($arrange->id);
            array_push($people, $user);
        }
        $this->assign('people', $people);
        $this->assign('survey_id', $survey_id);
        return $this->fetch();
    }

    public function add_manager($survey_id)
    {
        $post_data = Request::instance()->post();
        var_dump($post_data);
//        return $this->success('success','add');
    }

    public function analyze($survey_id)
    {
        $survey = Survey::get(['sid' => $survey_id]);
        $questions = Question::all(['sid' => $survey_id]);
        $optionss = array();
        $answerss = array();
        foreach ($questions as $question) {
            $options = Option::all(['qid' => $question->qid]);
            array_push($optionss, $options);
            $answers = Answer::all(['qid' => $question->qid]);
            array_push($answerss, $answers);
        }
        $this->assign('sum', count($answerss[0]));
        $this->assign('questions', $questions);
        $this->assign('answers', $answerss);
        $this->assign('options',$optionss);
//        var_dump($questions);
        return $this->fetch();
    }

    public function create()
    {
        return $this->fetch();
    }

    public function preview($survey_id)
    {
        $questions = Question::all(['sid' => $survey_id]);
        $questions = array_reverse($questions);
        $options_array = array();

        foreach ($questions as $question) {
            $options = Option::all(['qid' => $question->qid]);
            $options = array_reverse($options);
            array_push($options_array, $options);
        }
//        var_dump($questions);
//        var_dump($options_array);
        $this->assign('array', $options_array);
        $this->assign('questions', $questions);
        $this->assign('options', $options_array);
        return $this->fetch();
    }

    public function write($survey_id)
    {
        $questions = Question::all(['sid' => $survey_id]);
//        $questions=array_reverse($questions);
        $options_array = array();

        foreach ($questions as $question) {
            $options = Option::all(['qid' => $question->qid]);
//            $options=array_reverse($options);
            array_push($options_array, $options);
        }
//        var_dump($questions);
//        var_dump($options_array);
        $this->assign('array', $options_array);
        $this->assign('questions', $questions);
        $this->assign('options', $options_array);
        $this->assign('survey_id', $survey_id);
        return $this->fetch();

    }


    public function change($survey_id)
    {
        $survey = Survey::get($survey_id);
        $questions = Question::all(['sid' => $survey_id]);
        $questions = array_reverse($questions);
        $options_array = array();

        foreach ($questions as $question) {
            $options = Option::all(['qid' => $question->qid]);
            $options = array_reverse($options);
            array_push($options_array, $options);
        }
//        var_dump($questions);
//        var_dump($options_array);
        $this->assign('survey', $survey);
        $this->assign('array', $options_array);
        $this->assign('questions', $questions);
        $this->assign('options', $options_array);
        return $this->fetch();
    }

    public function try()
    {
        return $this->fetch();
    }


    public function add_try()
    {
        $post_data = Request::instance()->post();
        var_dump($post_data);
        $survey = new Survey();
        $survey->title = $post_data['title'];
        $survey->description = $post_data['description'];
        $survey->state = 0;
        $survey->latest_time = 0;
        $survey->save();
        var_dump($survey);

        $arrangement = new Arrangement();
        $arrangement->sid = $survey->sid;
        $arrangement->id = session('user_id');
        $arrangement->grant = 1;
        $arrangement->notice = 0;
        $arrangement->save();


        $question1 = new Question();
        $question1->sid = $survey->sid;
        $question1->question = $post_data['question'][1];
        $question1->type = 0;
        $question1->save();
        var_dump($question1);


        $question2 = new Question();
        $question2->sid = $survey->sid;
        $question2->question = $post_data['question'][2];
        $question2->type = 1;
        $question2->save();
        var_dump($question2);

        $question3 = new Question();
        $question3->sid = $survey->sid;
        $question3->question = $post_data['question'][3];
        $question3->type = 2;
        $question3->save();
        var_dump($question3);

        for ($i = 1; $i <= 4; $i++) {
            $option = new Option();
            $option->sid = $survey->sid;
            $option->qid = $question1->qid;
            $option->option = $post_data['radio'][$i];
            $option->save();
        }
        for ($i = 5; $i <= 8; $i++) {
            $option = new Option();
            $option->sid = $survey->sid;
            $option->qid = $question2->qid;
            $option->option = $post_data['radio'][$i];
            $option->save();
        }
        $option = new Option();
        $option->sid = $survey->sid;
        $option->qid = $question3->qid;
        $option->option = 0;
        $option->save();

        var_dump($post_data);
    }

}