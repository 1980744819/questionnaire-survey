CREATE SCHEMA `questionnaire` ;
use questionnaire;

CREATE TABLE `think_users` (
  `id` int(11) primary key NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(128) NOT NULL UNIQUE COMMENT '用户名',
  `password` varchar(128) NOT NULL COMMENT '密码',
  `introduction` varchar(1024) NOT NULL COMMENT '介绍'
);

CREATE TABLE `think_survey` (
  `sid` int(11) primary key NOT NULL AUTO_INCREMENT COMMENT '问卷id',
  `title` varchar(1024) NOT NULL COMMENT '标题',
  `description` varchar(1024) NOT NULL COMMENT '简介',
  `state` tinyint(1) NOT NULL COMMENT '状态，是否发布等',
  `latest_time` varchar(128) NOT NULL COMMENT '介绍'
 );


CREATE TABLE `think_arrangement`(
 `sid` int(11) not null AUTO_INCREMENT COMMENT '问卷id',
 `id` int(11) not null COMMENT '用户id',
 `grant` tinyint(1) not null COMMENT '管理权限',
 `notice` tinyint(1) not null COMMENT '是否tixing',
  primary key(`sid`,`id`),
  foreign key(`sid`) references survey(`sid`) on update cascade,
  foreign key(`id`) references users(`id`) on update cascade
 );


CREATE TABLE `think_question`
(
  `qid` int(11) primary key NOT NULL AUTO_INCREMENT COMMENT '问题id',
  `sid` int(11) NOT NULL COMMENT '问卷id',
  `question` varchar(1024) NOT NULL COMMENT '问题',
  `type` tinyint(1) NOT NULL COMMENT '种类',
   foreign key(sid) references survey(sid) on update cascade
);


CREATE TABLE `think_answer`
(
  `aid` int(11) primary key NOT NULL AUTO_INCREMENT COMMENT '回答id',
  `qid` int(11) NOT NULL COMMENT '问提id',
  `answer` varchar(1024) NOT NULL COMMENT '问题',
   foreign key(qid) references question(qid) on update cascade
);

CREATE TABLE `think_option` (
  `oid` int(11) primary key NOT NULL AUTO_INCREMENT COMMENT '选项id',
  `sid` int(11) NOT NULL COMMENT '问卷id',
  `qid` int(11) NOT NULL COMMENT '问卷中问题id',
  `option` varchar(1024) NOT NULL COMMENT '选项',
   foreign key(sid) references survey(sid) on update cascade,
   foreign key(qid) references question(qid) on update cascade
);