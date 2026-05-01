import { createClient } from '@supabase/supabase-js'

// 1. رابط المشروع (URL) الخاص بك على Supabase
const supabaseUrl = 'https://ryyrpqdmakhytqywawnf.supabase.co'

// 2. مفتاح الربط العام (Anon Key) 
// هذا المفتاح آمن للاستخدام في المتصفح طالما فعلت قوانين RLS في قاعدة البيانات
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5eXJwcWRtYWhreXRocXl3YW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMjUxMDUsImV4cCI6MjA5MjkwMTEwNX0.8pe46ww0cfz-kTXX_dAYsKdMGyZJPJbvFylCrj9oiWk'

// 3. إنشاء نسخة العميل وتصديرها
// نستخدم export لكي نستدعي هذا المتغير (supabase) في أي صفحة أخرى
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
