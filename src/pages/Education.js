import React from 'react';
import {Col, Row, Stack} from 'react-bootstrap';

import Title from "../components/text/title/Title"
import SectionTitle from '../components/text/section-title/SectionTitle'
import SubsectionTitle from '../components/text/subsection-title/SubsectionTitle';
import Paragraph from '../components/text/paragraph/Paragraph'
import IconButton from '../components/content/icon-button/IconButton'

import uw from '../resources/img/drumheller.jpg'
import GradePoint from '../components/content/grade-point/GradePoint';

export default function Education() {
  return (
    <>
      <Title>Education</Title>
      <img className="wide" src={uw} alt="University of Washington Seattle Campus" />
      <Row>
        <Col>
          <SectionTitle>University of Washington | 2018-2022</SectionTitle>
        </Col>
        <Col xs="auto">
          <Stack direction='horizontal' className="mt-3">
            <IconButton variant="uw" />
            <IconButton variant="ischool" />
          </Stack>
        </Col>
      </Row>
      <Row xs={12}>
        <Col md={8}>
          <SubsectionTitle>Informatics Major</SubsectionTitle>
          <Paragraph>
            Informatics is the study of information technology and its impact in today's world. While studying Informatics, I learned how to design and implement experiences for real people in all their diverse motives, backgrounds, and levels of ability.
          </Paragraph>
          <SubsectionTitle>Mathematics Minor</SubsectionTitle>
          <Paragraph>
            My minor in Mathematics supplements the data and computer science coursework present in the Informatics major, giving me an in-depth understanding and intuition for the underlying theory.
          </Paragraph>
        </Col>
        <Col xs={{order: 'first'}} md={{order: 'last'}} >
          <GradePoint className="ms-md-auto" />
        </Col>
      </Row>
    </>
  )
}