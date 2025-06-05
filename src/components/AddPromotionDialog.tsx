
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AddPromotionDialog = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    target: "",
    channel: "",
    budget: "",
    description: "",
    metrics: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Promotion data:", { ...formData, startDate, endDate });
    // TODO: Implement actual submission logic
    setOpen(false);
    // Reset form
    setFormData({
      title: "",
      type: "",
      target: "",
      channel: "",
      budget: "",
      description: "",
      metrics: ""
    });
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Tạo Hoạt động mới
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Tạo Hoạt động Xúc tiến mới</DialogTitle>
          <DialogDescription>
            Nhập thông tin chi tiết về hoạt động xúc tiến du lịch
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Tiêu đề hoạt động *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Nhập tiêu đề hoạt động"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Loại hoạt động *</Label>
              <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn loại hoạt động" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Quảng cáo trực tuyến">Quảng cáo trực tuyến</SelectItem>
                  <SelectItem value="Hội chợ du lịch">Hội chợ du lịch</SelectItem>
                  <SelectItem value="Roadshow">Roadshow</SelectItem>
                  <SelectItem value="PR & Truyền thông">PR & Truyền thông</SelectItem>
                  <SelectItem value="Hợp tác KOL">Hợp tác KOL</SelectItem>
                  <SelectItem value="Khác">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="target">Đối tượng mục tiêu *</Label>
              <Select value={formData.target} onValueChange={(value) => handleInputChange("target", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn đối tượng mục tiêu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Du khách trong nước">Du khách trong nước</SelectItem>
                  <SelectItem value="Du khách quốc tế">Du khách quốc tế</SelectItem>
                  <SelectItem value="Du khách khu vực">Du khách khu vực</SelectItem>
                  <SelectItem value="Doanh nghiệp du lịch">Doanh nghiệp du lịch</SelectItem>
                  <SelectItem value="Tất cả">Tất cả</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="channel">Kênh thực hiện *</Label>
              <Select value={formData.channel} onValueChange={(value) => handleInputChange("channel", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn kênh thực hiện" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Facebook/Instagram">Facebook/Instagram</SelectItem>
                  <SelectItem value="Google Ads">Google Ads</SelectItem>
                  <SelectItem value="Website/Blog">Website/Blog</SelectItem>
                  <SelectItem value="Báo chí/TV">Báo chí/TV</SelectItem>
                  <SelectItem value="Sự kiện trực tiếp">Sự kiện trực tiếp</SelectItem>
                  <SelectItem value="Đa kênh">Đa kênh</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Ngày bắt đầu *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd/MM/yyyy") : "Chọn ngày bắt đầu"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Ngày kết thúc *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd/MM/yyyy") : "Chọn ngày kết thúc"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Ngân sách (VNĐ)</Label>
            <Input
              id="budget"
              type="number"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              placeholder="Nhập ngân sách dự kiến"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả hoạt động</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Nhập mô tả chi tiết về hoạt động"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="metrics">Chỉ số đánh giá</Label>
            <Textarea
              id="metrics"
              value={formData.metrics}
              onChange={(e) => handleInputChange("metrics", e.target.value)}
              placeholder="Nhập các chỉ số đánh giá hiệu quả (reach, engagement, conversion...)"
              className="min-h-[80px]"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Hủy
            </Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
              Tạo Hoạt động
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPromotionDialog;
