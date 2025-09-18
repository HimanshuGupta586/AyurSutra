"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Heart, Activity, Moon, Zap, Calendar, Award } from "lucide-react"

export function ProgressTracking() {
  const healthScoreData = [
    { date: "Week 1", score: 65 },
    { date: "Week 2", score: 68 },
    { date: "Week 3", score: 72 },
    { date: "Week 4", score: 75 },
    { date: "Week 5", score: 78 },
    { date: "Week 6", score: 82 },
  ]

  const doshaBalanceData = [
    { name: "Vata", value: 40, color: "#10b981" },
    { name: "Pitta", value: 35, color: "#f59e0b" },
    { name: "Kapha", value: 25, color: "#3b82f6" },
  ]

  const symptomsData = [
    { symptom: "Stress", week1: 8, week6: 3 },
    { symptom: "Fatigue", week1: 7, week6: 2 },
    { symptom: "Insomnia", week1: 6, week6: 1 },
    { symptom: "Digestion", week1: 5, week6: 1 },
  ]

  const vitalMetrics = [
    {
      label: "Energy Level",
      value: 85,
      target: 90,
      icon: Zap,
      color: "text-yellow-500",
      trend: "+12%",
    },
    {
      label: "Sleep Quality",
      value: 78,
      target: 85,
      icon: Moon,
      color: "text-blue-500",
      trend: "+25%",
    },
    {
      label: "Stress Level",
      value: 25,
      target: 20,
      icon: Heart,
      color: "text-red-500",
      trend: "-60%",
    },
    {
      label: "Overall Wellness",
      value: 82,
      target: 90,
      icon: Activity,
      color: "text-green-500",
      trend: "+18%",
    },
  ]

  const achievements = [
    {
      title: "Stress Warrior",
      description: "Reduced stress levels by 60%",
      date: "Achieved 2 days ago",
      icon: "🧘‍♀️",
    },
    {
      title: "Sleep Master",
      description: "Maintained 7+ hours sleep for 2 weeks",
      date: "Achieved 1 week ago",
      icon: "😴",
    },
    {
      title: "Consistency Champion",
      description: "Took medicines on time for 30 days",
      date: "Achieved 3 days ago",
      icon: "💊",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Progress Tracking</h1>
        <p className="text-muted-foreground mt-1">Monitor your wellness journey and health improvements</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vitalMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${metric.color}`} />
                  <Badge variant={metric.trend.startsWith("+") ? "default" : "destructive"}>{metric.trend}</Badge>
                </div>
                <h3 className="font-medium text-sm">{metric.label}</h3>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>{metric.value}%</span>
                    <span className="text-muted-foreground">Target: {metric.target}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Score Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Health Score Trend</span>
            </CardTitle>
            <CardDescription>Your overall wellness score over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={healthScoreData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[60, 90]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Dosha Balance */}
        <Card>
          <CardHeader>
            <CardTitle>Dosha Balance</CardTitle>
            <CardDescription>Your current constitutional balance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={doshaBalanceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {doshaBalanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4">
              {doshaBalanceData.map((dosha, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dosha.color }} />
                  <span className="text-sm">
                    {dosha.name}: {dosha.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Symptoms Improvement */}
      <Card>
        <CardHeader>
          <CardTitle>Symptoms Improvement</CardTitle>
          <CardDescription>Comparison of symptom severity (1-10 scale)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={symptomsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="symptom" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="week1" fill="hsl(var(--destructive))" name="Week 1" />
              <Bar dataKey="week6" fill="hsl(var(--primary))" name="Week 6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Recent Achievements</span>
          </CardTitle>
          <CardDescription>Milestones in your wellness journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  </div>
                </div>
                <Badge variant="secondary">Completed</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Treatment Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Treatment Timeline</CardTitle>
          <CardDescription>Your Ayurvedic treatment journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Started Panchakarma Treatment</p>
                <p className="text-sm text-muted-foreground">45 days ago</p>
              </div>
              <Badge variant="default">Completed</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Began Rasayana Therapy</p>
                <p className="text-sm text-muted-foreground">30 days ago</p>
              </div>
              <Badge variant="default">In Progress</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Lifestyle Counseling Session</p>
                <p className="text-sm text-muted-foreground">Scheduled for next week</p>
              </div>
              <Badge variant="outline">Upcoming</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
