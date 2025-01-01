export default function PortfolioCard() {
    return (
      <div className="bg-white rounded-lg">
        <div className="w-full aspect-[3/4]" />
        <div className="p-4 space-y-2">
          <h2>รัชชานนท์ ปานมาศ</h2>
          <div>
            <p className="text-xs text-neutral-400">วิทยาการคอมพิวเตอร์</p>
            <p className="text-xs text-neutral-400">คณะวิทยาศาสตร์</p>
  
            <p className="text-xs text-neutral-400">จุฬาลงกรณ์มหาวิทยาลัย</p>
          </div>
          <p className="text-xs text-neutral-600">TCAS 63</p>
        </div>
      </div>
    );
  }