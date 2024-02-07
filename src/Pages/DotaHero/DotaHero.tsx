import React from 'react';
import Layout from '../../Components/DotaHero/Layout';
import ContentWrapper from '../../Components/Shared/ContentWrapper';

const DotaHero: React.FC = (): JSX.Element => (
	<ContentWrapper breadCrumbs='Dota 2 / Hero'>
		<Layout />
	</ContentWrapper>
);

export default DotaHero;
