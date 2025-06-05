
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Simulate login - in real app this would connect to Supabase
      toast({
        title: "Đăng nhập thành công",
        description: "Chào mừng bạn đến với NBD-RMS",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Lỗi đăng nhập",
        description: "Vui lòng nhập đầy đủ email và mật khẩu",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <span className="text-white font-bold text-xl">NBD</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">NBD-RMS</h1>
          <p className="text-slate-600">
            Hệ thống Quản lý Nghiệp vụ Di tích, Sự kiện và Xúc tiến Du lịch
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Núi Bà Đen
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl text-center text-slate-800">Đăng nhập</CardTitle>
            <CardDescription className="text-center">
              Vui lòng đăng nhập để truy cập hệ thống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-slate-300 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-slate-300 focus:border-blue-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Đăng nhập
              </Button>
              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Quên mật khẩu?
                </a>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-slate-500">
          © 2024 Ban Quản lý Khu du lịch Quốc gia Núi Bà Đen
        </div>
      </div>
    </div>
  );
};

export default Index;
