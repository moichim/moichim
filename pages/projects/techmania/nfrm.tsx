import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import Content from "@/components/partials/content/Content"
import Partial from "@/components/partials/content/Partial"
import Picture from "@/components/partials/content/Picture"
import { useScheme } from "@/context/color/ColorContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import Link from "next/link"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import obalka from "@/public/brozura/obalka.jpg";
import vnitrek from "@/public/brozura/vnitrek.jpg";


export const metadata: Metadata = {
	"title": "Brožura Neformální vzdělávání v plzeňském kraji",
	"description": "Návrh designu publikace",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/brozura/vnitrek.jpg",
	"color": "gray",
	"year": 2018,
	"month": 7,
	"day": 25,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#ededed" }, {bg: "#0b1b1f"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

                <Picture lg={4} src={obalka} />
                <Picture lg={8} src={vnitrek} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)