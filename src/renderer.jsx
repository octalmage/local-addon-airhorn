import Boilerplate from './Boilerplate';
import fs from 'fs-extra';
import path from 'path';

const packageJSON = fs.readJsonSync(path.join(__dirname, '../package.json'));

const addonID = packageJSON['slug'];

export default function (context) {
	const { React, hooks } = context;
	const { Route } = context.ReactRouter;

	// Create the route/page of content that will be displayed when the menu option is clicked
	// hooks.addContent('routesSiteInfo', () => <Route key={`${addonID}-addon`} path={`/main/site-info/:siteID/${addonID}`}
	// 	render={(props) => <Boilerplate {...props} />} />);

	hooks.addContent('SiteInfo_Top_TopRight', () => (
		<Boilerplate />
	));


}
