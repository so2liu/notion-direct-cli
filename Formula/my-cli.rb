class MyCli < Formula
  desc "A simple command line interface for my-cli"
  homepage "https://github.com/so2liu/notion-direct-cli"
  url "https://github.com/so2liu/notion-direct-cli/releases/download/0.0.1/my-cli-arm.tar-gz"
  sha256 "d050aff37a2517ace50f8198f5f6f0b264aa56a1bdcae85c86e47c5d49ff7529"
  version "0.0.1"

  def install
    bin.install "my-cli"
  end
end