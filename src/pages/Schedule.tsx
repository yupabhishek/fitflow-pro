import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, User, Users, MapPin, ArrowRight } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const classTypes = ["All Classes", "HIIT", "Yoga", "CrossFit", "Cycling", "Boxing", "Pilates", "Strength"];

const scheduleData = [
  // Monday
  { day: "Monday", time: "6:00 AM", name: "Morning HIIT", type: "HIIT", trainer: "Sarah Chen", duration: "45 min", spots: 8, room: "Studio A" },
  { day: "Monday", time: "7:00 AM", name: "Power Yoga", type: "Yoga", trainer: "Emily Parker", duration: "60 min", spots: 12, room: "Yoga Studio" },
  { day: "Monday", time: "9:00 AM", name: "CrossFit WOD", type: "CrossFit", trainer: "David Rodriguez", duration: "60 min", spots: 5, room: "CrossFit Box" },
  { day: "Monday", time: "12:00 PM", name: "Lunch Burn", type: "HIIT", trainer: "Sarah Chen", duration: "30 min", spots: 15, room: "Studio A" },
  { day: "Monday", time: "5:30 PM", name: "Spin Class", type: "Cycling", trainer: "Lisa Thompson", duration: "45 min", spots: 3, room: "Cycling Studio" },
  { day: "Monday", time: "6:30 PM", name: "Boxing Basics", type: "Boxing", trainer: "James Mitchell", duration: "60 min", spots: 10, room: "Boxing Ring" },
  { day: "Monday", time: "7:30 PM", name: "Evening Flow", type: "Yoga", trainer: "Emily Parker", duration: "60 min", spots: 8, room: "Yoga Studio" },
  
  // Tuesday
  { day: "Tuesday", time: "6:00 AM", name: "Strength & Conditioning", type: "Strength", trainer: "Marcus Johnson", duration: "60 min", spots: 6, room: "Weight Room" },
  { day: "Tuesday", time: "7:30 AM", name: "Pilates Core", type: "Pilates", trainer: "Nicole Williams", duration: "45 min", spots: 10, room: "Studio B" },
  { day: "Tuesday", time: "10:00 AM", name: "Senior Fitness", type: "Strength", trainer: "Lisa Thompson", duration: "45 min", spots: 15, room: "Studio A" },
  { day: "Tuesday", time: "12:00 PM", name: "Express HIIT", type: "HIIT", trainer: "Sarah Chen", duration: "30 min", spots: 12, room: "Studio A" },
  { day: "Tuesday", time: "5:00 PM", name: "CrossFit Fundamentals", type: "CrossFit", trainer: "David Rodriguez", duration: "60 min", spots: 8, room: "CrossFit Box" },
  { day: "Tuesday", time: "6:30 PM", name: "Cycling Endurance", type: "Cycling", trainer: "James Mitchell", duration: "60 min", spots: 2, room: "Cycling Studio" },
  { day: "Tuesday", time: "8:00 PM", name: "Restorative Yoga", type: "Yoga", trainer: "Emily Parker", duration: "75 min", spots: 6, room: "Yoga Studio" },

  // Wednesday
  { day: "Wednesday", time: "6:00 AM", name: "Morning HIIT", type: "HIIT", trainer: "Sarah Chen", duration: "45 min", spots: 4, room: "Studio A" },
  { day: "Wednesday", time: "7:00 AM", name: "Vinyasa Flow", type: "Yoga", trainer: "Emily Parker", duration: "60 min", spots: 10, room: "Yoga Studio" },
  { day: "Wednesday", time: "9:00 AM", name: "CrossFit WOD", type: "CrossFit", trainer: "David Rodriguez", duration: "60 min", spots: 7, room: "CrossFit Box" },
  { day: "Wednesday", time: "12:00 PM", name: "Power Pilates", type: "Pilates", trainer: "Nicole Williams", duration: "45 min", spots: 8, room: "Studio B" },
  { day: "Wednesday", time: "5:30 PM", name: "Boxing Cardio", type: "Boxing", trainer: "James Mitchell", duration: "45 min", spots: 12, room: "Boxing Ring" },
  { day: "Wednesday", time: "6:30 PM", name: "Spin & Burn", type: "Cycling", trainer: "Lisa Thompson", duration: "45 min", spots: 5, room: "Cycling Studio" },
  { day: "Wednesday", time: "7:30 PM", name: "Total Body Strength", type: "Strength", trainer: "Marcus Johnson", duration: "60 min", spots: 10, room: "Weight Room" },

  // Thursday
  { day: "Thursday", time: "6:00 AM", name: "Strength & Conditioning", type: "Strength", trainer: "Marcus Johnson", duration: "60 min", spots: 8, room: "Weight Room" },
  { day: "Thursday", time: "7:30 AM", name: "Pilates Sculpt", type: "Pilates", trainer: "Nicole Williams", duration: "45 min", spots: 6, room: "Studio B" },
  { day: "Thursday", time: "10:00 AM", name: "Gentle Yoga", type: "Yoga", trainer: "Emily Parker", duration: "60 min", spots: 12, room: "Yoga Studio" },
  { day: "Thursday", time: "12:00 PM", name: "Lunch Express", type: "HIIT", trainer: "Sarah Chen", duration: "30 min", spots: 10, room: "Studio A" },
  { day: "Thursday", time: "5:00 PM", name: "CrossFit Open Gym", type: "CrossFit", trainer: "David Rodriguez", duration: "90 min", spots: 15, room: "CrossFit Box" },
  { day: "Thursday", time: "6:30 PM", name: "Boxing Technique", type: "Boxing", trainer: "James Mitchell", duration: "60 min", spots: 8, room: "Boxing Ring" },
  { day: "Thursday", time: "7:30 PM", name: "Yin Yoga", type: "Yoga", trainer: "Emily Parker", duration: "75 min", spots: 10, room: "Yoga Studio" },

  // Friday
  { day: "Friday", time: "6:00 AM", name: "Friday Burn", type: "HIIT", trainer: "Sarah Chen", duration: "45 min", spots: 6, room: "Studio A" },
  { day: "Friday", time: "7:00 AM", name: "Power Yoga", type: "Yoga", trainer: "Emily Parker", duration: "60 min", spots: 8, room: "Yoga Studio" },
  { day: "Friday", time: "9:00 AM", name: "CrossFit WOD", type: "CrossFit", trainer: "David Rodriguez", duration: "60 min", spots: 10, room: "CrossFit Box" },
  { day: "Friday", time: "12:00 PM", name: "Core Blast", type: "Pilates", trainer: "Nicole Williams", duration: "30 min", spots: 12, room: "Studio B" },
  { day: "Friday", time: "5:00 PM", name: "Spin Party", type: "Cycling", trainer: "Lisa Thompson", duration: "60 min", spots: 4, room: "Cycling Studio" },
  { day: "Friday", time: "6:00 PM", name: "Fight Night", type: "Boxing", trainer: "James Mitchell", duration: "60 min", spots: 6, room: "Boxing Ring" },

  // Saturday
  { day: "Saturday", time: "8:00 AM", name: "Weekend Warrior", type: "CrossFit", trainer: "David Rodriguez", duration: "75 min", spots: 12, room: "CrossFit Box" },
  { day: "Saturday", time: "9:30 AM", name: "Yoga Flow", type: "Yoga", trainer: "Emily Parker", duration: "75 min", spots: 15, room: "Yoga Studio" },
  { day: "Saturday", time: "10:00 AM", name: "Total Body HIIT", type: "HIIT", trainer: "Sarah Chen", duration: "60 min", spots: 8, room: "Studio A" },
  { day: "Saturday", time: "11:30 AM", name: "Boxing Bootcamp", type: "Boxing", trainer: "James Mitchell", duration: "60 min", spots: 10, room: "Boxing Ring" },
  { day: "Saturday", time: "1:00 PM", name: "Strength Lab", type: "Strength", trainer: "Marcus Johnson", duration: "90 min", spots: 6, room: "Weight Room" },

  // Sunday
  { day: "Sunday", time: "9:00 AM", name: "Sunday Slow Flow", type: "Yoga", trainer: "Emily Parker", duration: "90 min", spots: 12, room: "Yoga Studio" },
  { day: "Sunday", time: "10:00 AM", name: "CrossFit Community", type: "CrossFit", trainer: "David Rodriguez", duration: "60 min", spots: 15, room: "CrossFit Box" },
  { day: "Sunday", time: "11:00 AM", name: "Pilates Restore", type: "Pilates", trainer: "Nicole Williams", duration: "60 min", spots: 10, room: "Studio B" },
  { day: "Sunday", time: "3:00 PM", name: "Recovery & Stretch", type: "Yoga", trainer: "Emily Parker", duration: "60 min", spots: 8, room: "Yoga Studio" },
];

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    HIIT: "bg-red-500/20 text-red-400 border-red-500/30",
    Yoga: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    CrossFit: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Cycling: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Boxing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Pilates: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Strength: "bg-green-500/20 text-green-400 border-green-500/30",
  };
  return colors[type] || "bg-primary/20 text-primary border-primary/30";
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedType, setSelectedType] = useState("All Classes");

  const filteredClasses = scheduleData
    .filter((c) => c.day === selectedDay)
    .filter((c) => selectedType === "All Classes" || c.type === selectedType);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            CLASS <span className="gradient-text">SCHEDULE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect class for your fitness journey. Book your spot today.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Day Selector */}
          <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedDay === day
                    ? "gradient-bg text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Class Type Filter */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
            {classTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedType === type
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          {filteredClasses.length > 0 ? (
            <div className="grid gap-4">
              {filteredClasses.map((classItem, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    {/* Time */}
                    <div className="flex items-center gap-3 md:w-32 shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-display text-xl">{classItem.time}</span>
                    </div>

                    {/* Class Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl">{classItem.name}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full border ${getTypeColor(classItem.type)}`}>
                          {classItem.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <User className="w-4 h-4" />
                          {classItem.trainer}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {classItem.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {classItem.room}
                        </span>
                      </div>
                    </div>

                    {/* Spots & Book */}
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span className={classItem.spots <= 3 ? "text-destructive font-medium" : "text-muted-foreground"}>
                          {classItem.spots} spots left
                        </span>
                      </div>
                      <Button className="gradient-bg hover:opacity-90 whitespace-nowrap">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-2xl border border-border">
              <p className="text-muted-foreground text-lg mb-4">No classes found for this selection.</p>
              <Button variant="outline" onClick={() => setSelectedType("All Classes")}>
                View All Classes
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            UNLIMITED CLASSES WITH PREMIUM
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Get access to all group classes, personal training sessions, and more with our Premium membership.
          </p>
          <Button asChild size="lg" className="gradient-bg hover:opacity-90">
            <Link to="/membership">
              View Membership Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
