import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
import * as S from './Detail.style';
import Button from '../../Components/Button/Button';

export default function Detail() {
	const { id } = useParams();
	return <>Detail 페이쥐 ~ {id}</>;
}
