<?php
/**
 * Created by PhpStorm.
 * User: 资霄
 * Date: 2018/4/22
 * Time: 3:17
 */

namespace app\index\controller;


use app\index\model\Answer;
use app\index\model\Arrangement;
use think\Controller;
use think\Model;
use think\Request;

class Survey extends Controller
{
    public function index()
    {

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
        return $this->fetch();

    }

    public function submit($survey_id)
    {
        $post_data = Request::instance()->post();
        $question_sum = count($post_data['qid']);
        var_dump($post_data);
        for ($i = 0; $i < $question_sum; $i++) {
            $qid = $post_data['qid'][$i];
            $qtype = (int)$post_data['type'][$i];
//            var_dump($post_data);
            if ($qtype == 0) {
                $answer = new Answer();
                $answer->answer = $post_data['question_answer'][$i];
                $answer->qid = $qid;
                $answer->save();
            } elseif ($qtype == 1) {
//                $answer_sum=count($post_data['question_answer'][$i]);
//                for($j=0;$j<$answer_sum;$j++){
//                    $answer=new Answer();
//                    $answer->answer=$post_data['question_answer'][$i][$j];
//                    $answer->qid=$qid;
//                    $answer->save();
//                }
                foreach ($post_data['question_answer'][$i] as $an) {
//                    var_dump($an);
//                    return;
                    $answer = new Answer();
                    $answer->answer = $an;
                    $answer->qid = $qid;
                    $answer->save();
//                    var_dump($answer);
                }
            } else {
                $answer = new Answer();
                var_dump($answer);
                $answer->answer = $post_data['question_answer'][$i];
                $answer->qid = $qid;
                $answer->save();
            }
        }

        return $this->success('success', 'index/manage/index');
    }

    public function delete_survey($survey_id)
    {
        $questions = Question::all(['sid' => $survey_id]);
//        $questions=array_reverse($questions);
//        $options_array=array();
        $arrangements = Arrangement::all(['sid' => $survey_id]);
        foreach ($arrangements as $arrangement) {
            $arrangement->delete();
        }
        $survey = \app\index\model\Survey::get($survey_id);
        $survey->delete();

        foreach ($questions as $question) {
            $options = Option::all(['qid' => $question->qid]);
            $answers = Answer::all(['qid' => $question->qid]);
            foreach ($options as $option) {
                $option->delete;
            }
            foreach ($answers as $answer) {
                $answer->delete();
            }
//            $options=array_reverse($options);
//            array_push($options_array,$options);
        }
        return $this->success('sueecess', 'index/manage/index');
    }

    public function delete_option()
    {

    }

    public function delete_question()
    {

    }

    public function change_survey_title()
    {

    }

    public function change_survey_description()
    {

    }

    public function change_option()
    {

    }

    public function change_question_type()
    {

    }

    public function change_question()
    {

    }

    public function add_question()
    {

    }

    public function add_option()
    {

    }

    public function add_manager($survey_id)
    {
        $post_data = Request::instance()->post();
        var_dump($post_data);
        $data_ = Arrangement::where('id', (int)$post_data['id'])->find();
//        return var_dump($data_);
        if (!is_null($data_))
            return $this->success('already join', url('index/manage/add', ['survey_id' => $survey_id]));
        $arrangement = new Arrangement();
        $arrangement->sid = (int)$survey_id;
        $arrangement->id = (int )$post_data['id'];
        $arrangement->grant = (int)$post_data['limit'];
        $arrangement->notice = 0;
        $arrangement->save();
        return $this->success('success', url('index/manage/add', ['survey_id' => $survey_id]));
    }
}