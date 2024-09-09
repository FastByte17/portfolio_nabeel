/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V5IVnJ1N8TX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { useData } from "../utils/data";


export default function Experiences() {
    const { experiences } = useData()

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white bg-teal-800">
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                    <p className="mt-2">Explore my professional journey and the skills I've developed.</p>
                </div>
                {experiences.map((experience, i) =>
                    <div className="space-y-8" key={i}>
                        <div className="grid grid-cols-[120px_1fr] items-start gap-6">
                            <div className="flex flex-col items-end gap-1 text-right text-sm">
                                <div>{experience.startDate}</div>
                                <div>{experience.endDate}</div>
                            </div>
                            <Card className="text-white bg-teal-900">
                                <CardContent className="sm:grid sm:grid-cols-[1fr_auto] items-start gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold">{experience.title}</h3>
                                        <p className="mt-2 ">
                                            {experience.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2 ">
                                            {experience.technologies.map((tech, i) =>
                                                <Badge key={i} className="bg-blue-500">{tech}</Badge>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 text-sm pt-4 sm:pt-0">
                                        <div>{experience.companyName}</div>
                                        <div>{experience.location}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}